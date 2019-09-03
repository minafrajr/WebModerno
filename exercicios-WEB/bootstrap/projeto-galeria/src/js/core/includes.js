import $ from 'jquery'

const loadHtmlSuccesCallBacks = []

export function onLoadHtmlSucces(callback) {
  if (!loadHtmlSuccesCallBacks.includes(callback)) {
    loadHtmlSuccesCallBacks.push(callback)
  }
}

function loadIncludes(parent) {
  if (!parent) parent = 'body'
  $(parent)
    .find('[wm-include]')
    .each(function(i, e) {
      const url = $(e).attr('wm-include')

      $.ajax({
        url,
        success(data) {
          $(e).html(data)
          $(e).removeAttr('wm-include')

          loadHtmlSuccesCallBacks.forEach(callback => callback(data))

          loadIncludes(e)
        }
      })
    })
}

loadIncludes()
