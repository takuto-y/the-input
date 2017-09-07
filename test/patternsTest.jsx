/**
 * Test for patterns.
 * Runs with mocha.
 */
'use strict'

import Patterns from '../lib/patterns'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('patterns', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <Patterns />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
