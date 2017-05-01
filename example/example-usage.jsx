'use strict'

import React from 'react'
import { TheInput, TheInputStyle } from 'the-input'

class ExampleComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = {
      values: {}
    }
  }

  render () {
    const s = this
    let { values } = s.state
    const onUpdate = (values) => {
      console.log('values:', values)
      s.setState({ values })
    }

    const { Text, TextArea, Radio, Checkbox,Select } = TheInput
    return (
      <div>
        <TheInputStyle/>

        <h3>Text</h3>

        <Text name='value01'
              value={values[ 'value01' ]}
              onUpdate={ onUpdate }
              placeholder='value01'
              options={[ 'Banana', 'Orange', 'Apple' ]}
        />

        <br/>
        <br/>

        <TextArea name='value01'
                  value={values[ 'value01' ]}
                  onUpdate={ onUpdate }
                  placeholder='value01'
        />

        <hr/>

        <h3>Radio</h3>

        <div>
          <Radio name='value02'
                 value={values[ 'value02' ]}
                 onUpdate={ onUpdate }
                 options={[ 'Car', 'Ship', 'Plane' ]}
          />
        </div>

        <hr/>

        <h3>Checkbox</h3>

        <div>
          <Checkbox name='value03'
                    value={values[ 'value03' ]}
                    onUpdate={ onUpdate }
                    options={[ 'Green', 'Pink', 'Brown' ]}
          />
        </div>


        <h3>Select</h3>

        <div>
          <Select name='value04'
                    value={values[ 'value04' ]}
                    onUpdate={ onUpdate }
                    options={[ 'Tea', 'Coffee', 'Water' ]}
          />
        </div>

        <br/>
        <br/>
        <br/>
      </div>

    )
  }
}

export default ExampleComponent
