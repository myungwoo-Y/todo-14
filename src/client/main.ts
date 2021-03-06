import './styles/globalstyle.scss'
import './styles/page.scss'

import './scripts/card-dnd'
import './scripts/column-dnd'

import './scripts/init.ts'
import './scripts/column.ts'
import './scripts/card.ts'
import './scripts/activity.ts'

import './scripts/color-scheme.ts'
import { resetDatabaseAPI } from './api/reset-database'

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'z' && e.metaKey && e.ctrlKey) {
      resetDatabaseAPI(
        parseInt(document.querySelector('.app').getAttribute('board-id'))
      ).then(() => {
        window.location.reload()
      })
    }
  })
})
