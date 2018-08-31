the-input
==========

<!---
This file is generated by the-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-input
[bd_travis_url]: http://travis-ci.org/the-labo/the-input
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-input.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-input
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-input.svg?token=
[bd_license_url]: https://github.com/the-labo/the-input/blob/master/LICENSE
[bd_npm_url]: http://www.npmjs.org/package/the-input
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-input.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Input of the-components

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-input --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

[Live Demo](https://the-labo.github.io/the-input/doc/demo/index.html#/) is hosted on GitHub Page

```javascript
'use strict'

import React from 'react'
import { TheInput, TheInputStyle } from 'the-input'
import { TheSpinStyle } from 'the-spin'

class ExampleComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      values: {}
    }
    this.onUpdate = this.onUpdate.bind(this)
  }

  onUpdate (values) {
    console.log('values', values)
    this.setState({
      values: Object.assign({}, this.state.values, values)
    })
  }

  render () {
    const {values} = this.state
    const {onUpdate} = this

    const {
      Text,
      Password,
      Search,
      TextArea,
      Radio,
      Checkbox,
      Select,
      Toggle,
      PinCode,
      Slider,
      Range,
      Upload,
      Date,
      Tag
    } = TheInput
    return (
      <div>
        <TheInputStyle/>
        <TheSpinStyle/>

        <h3>Text</h3>

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              placeholder='value01'
              options={['Banana', 'Orange', 'Apple']}
        />

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              parser={(v) => String(v).toUpperCase()}
              placeholder='value01 only with uppercase parser'
              autoCapitalize={false}
              autoCorrect="off"
              options={['Banana', 'Orange', 'Apple']}
        />

        <Text name='value01'
              value={values['value01']}
              prefix={'Oh!'}
              suffix={', Yes it is!'}
              onUpdate={onUpdate}
              placeholder='value01'
              options={['Banana', 'Orange', 'Apple']}
        />

        <h3>Text with hint</h3>

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              placeholder='eg: hoge@example.com'
              pattern={Text.EMAIL_PATTERN}
              patternHint='Needs to be email'
        />

        <br/>

        <Search name='value01'
                value={values['value01']}
                onUpdate={onUpdate}
                placeholder='value01'
        />


        <br/>

        <Password name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  placeholder='value01'
        />

        <br/>

        <TextArea name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  onCombineEnter={() => console.log('combine enter')}
                  onEnter={() => console.log('enter')}
                  placeholder='value01'
        />

        <TextArea name='value01'
                  autoExpand
                  minRows={1}
                  maxRows={8}
                  value={values['value01']}
                  onUpdate={onUpdate}
                  onCombineEnter={() => console.log('combine enter')}
                  onEnter={() => console.log('enter')}
                  placeholder='auto expand'
        />

        <hr/>

        <h3>Radio</h3>

        <div>
          <Radio name='value02'
                 value={values['value02']}
                 onUpdate={onUpdate}
                 options={['Car', 'Ship', 'Plane']}
          />
        </div>

        <div>

          <Radio name='value02'
                 value={values['value02']}
                 onUpdate={onUpdate}
                 options={['Car', 'Ship', 'Plane']}
                 asButton
          />

        </div>

        <div>

          <Radio name='value02'
                 value={values['value02']}
                 onUpdate={onUpdate}
                 options={['Car', 'Ship', 'Plane']}
                 asToggle
          />

        </div>

        <hr/>

        <h3>Checkbox</h3>

        <div>
          <Checkbox name='value03'
                    value={values['value03']}
                    onUpdate={onUpdate}
                    options={['Green', 'Pink', 'Brown']}
          />
        </div>

        <hr/>
        <h3>Select</h3>

        <div>
          <Select name='value04'
                  placeholder='Any drink?'
                  nullable
                  value={values['value04']}
                  onUpdate={onUpdate}
                  sorter={(a, b) => a.localeCompare(b)}
                  disabledValues={['Coffee']}
                  options={['Tea', 'Coffee', 'Water', ...'abcdefghijlkmnlopqrstu'.split('')]}
          />


          <Select name='value04'
                  value={values['value04']}
                  placeholder='Full screen select'
                  onUpdate={onUpdate}
                  fullScreen
                  nullable
                  disabledValues={['Coffee']}
                  options={['Tea', 'Coffee', 'Water', ...new Array(100).fill(null).map((_, i) => `option-${i}`)]}
          />
        </div>

        <hr/>
        <h3>Toggle</h3>

        <div>
          <Toggle name='value05'
                  on={Boolean(values['value05'])}
                  onUpdate={onUpdate}
          />
        </div>

        <div>
          <Toggle name='value05'
                  on={Boolean(values['value05'])}
                  onTitle='This is on'
                  offTitle='This is off'
                  onUpdate={onUpdate}
          />
        </div>

        <hr/>
        <h3>Slider</h3>

        <div>
          <Slider name='value06'
                  value={values['value06'] || 10}
                  min={0}
                  max={100}
                  step={1}
                  onUpdate={onUpdate}
          />
        </div>

        <hr/>
        <h3>Range</h3>

        <div>
          <Range name='value07'
                 value={values['value07'] || [10, 80]}
                 min={0}
                 max={100}
                 step={1}
                 onUpdate={onUpdate}
          />
        </div>

        <hr/>
        <h3>Upload</h3>

        <div>
          <Upload name='value08'
                  value={values['value08']}
                  multiple={true}
                  onUpdate={onUpdate}
          />
        </div>


        <hr/>
        <h3>Tag</h3>

        <Tag name='value01'
             value={values['value01']}
             onUpdate={onUpdate}
             placeholder='value01'
             options={['Banana', 'Orange', 'Apple']}
        />

        <hr/>


        <h3>Date</h3>
        <Date name='value-date-01'
              value={values['value-date-01']}
              minDate={'2018-03-09'}
              placeholder={'date only'}
              onUpdate={onUpdate}
        />

        <Date name='value-date-01'
              value={values['value-date-01']}
              placeholder={'date and time'}
              timeEnabled
              minDate={'2018-03-09'}
              onUpdate={onUpdate}
        />

        <br/>


        <h3>PinCode</h3>
        <PinCode name='value-pin-code-01'
                 value={values['value-pin-code-01']}
                 onUpdate={onUpdate}
        />

        <br/>
        <br/>

        <hr/>

        <h2>Error</h2>

        <TheInput name='@'
                  type='hidden'
                  error='This is global error'/>

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              placeholder='value01'
              options={['Banana', 'Orange', 'Apple']}
              error='Something Wrong with This!'
        />

        <Password name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  placeholder='value01'
                  error='Something Wrong with This!'
        />

        <TextArea name='value01'
                  value={values['value01']}
                  onUpdate={onUpdate}
                  placeholder='value01'
                  error='Something Wrong with This!'
                  onKeyDown={(e) => console.log('key down', e.keyCode)}
        />

        <Select name='value04'
                value={values['value04']}
                onUpdate={onUpdate}
                options={['Tea', 'Coffee', 'Water']}
                error='Something Wrong with This!'
        />

        <Select name='value04'
                spinning
                value={values['value04']}
                onUpdate={onUpdate}
                options={['Tea', 'Coffee', 'Water']}
                error='Something Wrong with This!'
        />

        <Radio name='value02'
               value={values['value02']}
               onUpdate={onUpdate}
               options={['Car', 'Ship', 'Plane']}
               error='Something Wrong with This!'
        />
        <Checkbox name='value03'
                  value={values['value03']}
                  onUpdate={onUpdate}
                  options={['Green', 'Pink', 'Brown']}
                  disabledValues={['Pink']}
                  error='Something Wrong with This!'
        />


        <br/>
        <br/>
        <br/>

        <hr/>

        <h2>Readonly</h2>

        <Text name='value01'
              value={values['value01']}
              onUpdate={onUpdate}
              readOnly
              placeholder='value01'
        />

        <Select name='value04'
                value={values['value04']}
                onUpdate={onUpdate}
                options={['Tea', 'Coffee', 'Water']}
                readOnly
        />

        <Radio name='value02'
               value={values['value02']}
               onUpdate={onUpdate}
               options={['Car', 'Ship', 'Plane']}
               readOnly
        />
        <Checkbox name='value03'
                  value={values['value03']}
                  onUpdate={onUpdate}
                  options={['Green', 'Pink', 'Brown']}
                  readOnly
        />

        <Upload name='value08'
                value={values['value08']}
                multiple={true}
                readOnly
                onUpdate={onUpdate}
        />
      </div>

    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheInput

Input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `error` | union  | Input type | `null` |
| `name` | string  | Name of input | `'_the'` |
| `onUpdate` | func  | Handle for update | `` |
| `type` | string  |  | `'text'` |
| `value` | string  | Value of input | `''` |
| `options` |   |  | `{}` |

### TheInputCheckbox

Checkbox input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `disabledValues` | array  | Disabled values | `[]` |
| `error` | union  |  | `null` |
| `name` | string  |  | `` |
| `onUpdate` | func  | Handle for update | `` |
| `options` | union  | Options | `{}` |
| `parser` | func  | Value parser | `String` |
| `splitter` | string  | Value Splitter text | `','` |
| `value` | union  | Value of input | `''` |

### TheInputDate



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `maxDate` | union  |  | `null` |
| `minDate` | union  |  | `null` |
| `name` | string  |  | `` |
| `onUpdate` | func  |  | `` |
| `timeEnabled` | bool  |  | `false` |

### TheInputPassword




### TheInputPinCode




### TheInputRadio

Radio input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `asButton` | bool  | Using button-like style | `false` |
| `asToggle` | bool  | Using toggle-like style | `false` |
| `disabledValues` | array  | Disabled values | `[]` |
| `error` | union  | Input error | `null` |
| `name` | string  | Name of input | `` |
| `onUpdate` | func  | Handle for update | `` |
| `options` | union  | Options | `{}` |
| `parser` | func  | Value parser | `String` |
| `sorter` | func  | Options sorter | `(v1, v2) => String(v1).localeCompare(v2)` |
| `value` | union  | Value of input | `''` |
| `role` |   |  | `'radiogroup'` |

### TheInputRange

Range Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `barOnly` | bool  | Hides min/max value text | `false` |
| `error` | union  | Input error | `null` |
| `max` | number  | Max value | `100` |
| `min` | number  | Min value | `0` |
| `name` | string  |  | `` |
| `onUpdate` | func  | Handle for update | `` |
| `step` | number  | Value step | `0.1` |
| `value` | arrayOf number | Value of input | `[0, 100]` |

### TheInputSearch




### TheInputSelect

Select Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `disabledValues` | arrayOf string | Unselecatable values | `[]` |
| `error` | union  | Input error | `null` |
| `name` | string  | Name of input | `` |
| `nullable` | bool  | Allow null select | `false` |
| `nullText` | string  | Text for null | `'( no select )'` |
| `onEnter` | func  | Handle for enter | `null` |
| `onUpdate` | func  | Handle for update | `` |
| `options` | union  | Options | `{}` |
| `parser` | func  | Value parser | `String` |
| `sorter` | func  | Options sorter | `(v1, v2) => String(v1).localeCompare(v2)` |
| `spinning` | bool  |  | `false` |
| `value` | string  | Value of input | `''` |

### TheInputSlider

Slider Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `barOnly` | bool  | Hides min/max value text | `false` |
| `error` | union  | Input error | `null` |
| `max` | number  | Max value | `100` |
| `min` | number  | Min value | `0` |
| `name` | string  |  | `` |
| `onUpdate` | func  | Handle for update | `` |
| `step` | number  | Value step | `0.1` |
| `value` | number  | Value of input | `0` |

### TheInputTag




### TheInputText

Text Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `error` | union  | Input error | `null` |
| `matcher` | func  | Options parser | `(candidate, value) => {
  return candidate.match(value) || candidate.toLowerCase().match(value.toLowerCase())
}` |
| `name` | string  | Name of input | `` |
| `onDown` | func  | Handle for down | `` |
| `onEnter` | func  | Handle for enter | `null` |
| `onLeft` | func  | Handle for left | `` |
| `onRight` | func  | Handle for right | `` |
| `onUp` | func  | Handle for up | `` |
| `onUpdate` | func  | Handle for update | `` |
| `options` | union  | Options | `{}` |
| `parser` | func  | Value parser | `(v) => String(v || '')` |
| `pattern` | instanceOf  | Regexp for input | `null` |
| `patternWarning` | string  | Warning text when pattern failed | `null` |
| `prefix` | node  | prefix | `null` |
| `suffix` | node  | suffix | `null` |
| `tabIndex` | number  | Tab index | `` |
| `type` | string  | Text type | `'text'` |
| `value` | string  | Value of input | `''` |
| `role` |   |  | `'textbox'` |

### TheInputTextArea

TextArea Input

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `autoExpand` | bool  | Auto expanding text area height | `false` |
| `maxRows` | number  | Max rows when autoExpand is enabled | `10` |
| `minRows` | number  | Min rows when autoExpand is enabled | `1` |
| `name` | string  | Name of input | `` |
| `onUpdate` | func  | Handle for update | `` |
| `parser` | func  | Value parser | `String` |
| `rows` | number  | TextArea rows | `5` |
| `value` | string  | Value of input | `''` |
| `error` |   |  | `null` |
| `role` |   |  | `'textbox'` |
| `spellCheck` |   |  | `false` |

### TheInputToggle

Toggle input of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `offTitle` | string  | Title text for off state | `''` |
| `on` | bool  | Switch on or not | `false` |
| `onTitle` | string  | Title text for on state | `''` |
| `width` | number  | Width of component | `64` |
| `error` |   |  | `null` |

### TheInputUpload



**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `accept` | string  | Accept file type | `null` |
| `error` | union  | Error message | `null` |
| `height` | number  | Image height | `180` |
| `multiple` | bool  | Allow multiple upload | `false` |
| `name` | string  |  | `` |
| `onError` | func  | Handler for error event | `` |
| `onLoad` | func  | Handler for load event | `` |
| `onUpdate` | func  | Handle for update | `` |
| `spinner` | string  | Spinner theme | `` |
| `text` | string  | Guide text | `'Upload File'` |
| `value` | union  | Value of input | `` |
| `width` | number  | Image width | `180` |
| `readOnly` |   |  | `false` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-input/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][t_h_e_labo_url]

[t_h_e_labo_url]: https://github.com/the-labo

<!-- Links End -->
