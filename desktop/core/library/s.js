'use strict'

import Operator from '../operator.js'

export default function OperatorS (orca, x, y, passive) {
  Operator.call(this, orca, x, y, 's', passive)

  this.name = 'south'
  this.info = 'Moves southward, or bangs'
  this.draw = false

  this.theme = {
    bg: 'b_s',
    fg: 'f_s'
  }

  this.operation = function () {
    this.move(0, 1)
    this.passive = false
  }
}
