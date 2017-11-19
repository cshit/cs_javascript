class Task
  constructor: (@name) ->
    @status = 'incomplete'

  complete: ->
    @status = 'complete'
    true

exports.Task = Task
