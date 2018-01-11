'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import { htmlAttributesFor, eventHandlersFor, newId } from 'the-component-util'
import { TheIcon } from 'the-icon'
import { normalizeOptions, normalizeArrayValue, renderErrorMessage } from './helpers'

/**
 * Checkbox input of the-components
 */
class TheInputCheckbox extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.id = newId()
  }

  render () {
    const s = this
    const {props} = s
    let {
      id = s.id,
      className,
      name,
      readOnly,
      options,
      value,
      error,
      splitter
    } = props

    options = normalizeOptions(options)
    value = normalizeArrayValue(value, splitter).map((value) => String(value).trim())

    return (
      <div {...htmlAttributesFor(props, {except: ['id', 'className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-input-checkbox', className, {
             'the-input-error': !!error
           })}
           data-value={value}
           id={id}
      >
        {renderErrorMessage(error)}

        {
          readOnly ? (
            <span className='the-input-checkbox-readonly'>{options[value]}</span>
          ) : (
            Object.keys(options).map((optionValue) => (
              <TheInputCheckbox.Option name={name}
                                       checked={optionValue.split(splitter).some((optionValue) => value.includes(String(optionValue).trim()))}
                                       id={s.idFor(optionValue)}
                                       key={optionValue}
                                       value={optionValue}
                                       onChange={(e) => s.handleChange(e)}
                                       label={options[optionValue]}
              />
            ))
          )
        }
      </div>
    )
  }

  handleChange (e) {
    const s = this
    let {
      parser,
      onChange,
      onUpdate,
      value,
      splitter
    } = s.props
    let {name, value: changedValue, checked} = e.target
    changedValue = String(changedValue).trim()
    value = normalizeArrayValue(value, splitter)
      .map((value) => String(value).trim())
    let has = value.includes(changedValue)
    if (has && !checked) {
      value = value.filter((value) => value !== changedValue)
    }
    if (!has && checked) {
      value.push(changedValue)
    }
    onChange && onChange(e)
    onUpdate && onUpdate({
      [name]: parser(value)
    })
  }

  idFor (optionValue) {
    const s = this
    let {id = s.id} = s.props
    return [id, ...[].concat(optionValue)].join('-')
  }

  static Option ({name, value, id, checked, onChange, label}) {
    const icon = checked ? TheInputCheckbox.CHECKED_ICON : TheInputCheckbox.NORMAL_ICON
    return (
      <div className={c('the-input-checkbox-item', {
        'the-input-checkbox-item-checked': checked
      })}
           data-value={value}
           key={value}
      >
        <input type='checkbox'
               className='the-input-checkbox-checkbox'
               {...{name, checked, id, value, onChange}}
        />
        <label htmlFor={id}
               className='the-input-checkbox-label'
        >
          <TheIcon className={c('the-input-checkbox-icon', icon)}/>
          {label}
        </label>
      </div>
    )
  }
}

TheInputCheckbox.NORMAL_ICON = 'far fa-square'
TheInputCheckbox.CHECKED_ICON = 'fas fa-check-square'

TheInputCheckbox.propTypes = {
  /** Name of input */
  name: PropTypes.string.isRequired,
  /** Value of input */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  /** Handle for update */
  onUpdate: PropTypes.func.isRequired,
  /** Value parser */
  parser: PropTypes.func,
  /** Error message */
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  /** Options */
  options: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.bool)
  ]),
  /** Value Splitter text */
  splitter: PropTypes.string
}

TheInputCheckbox.defaultProps = {
  value: '',
  parser: String,
  error: null,
  options: {},
  splitter: ','
}

TheInputCheckbox.displayName = 'TheInputCheckbox'

export default TheInputCheckbox
