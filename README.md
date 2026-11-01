# Assignment #6 — jQuery

**Student:** Mardan Khalilov  
**Group:** SE-2527  
**University:** Astana IT University

**Live website:** https://mardan7.github.io/web_ass6/  
**Repository:** https://github.com/Mardan7/web_ass6

A simple multipage website for practicing jQuery selectors, effects, DOM manipulation and animations. Built with HTML, CSS and jQuery 3.7.1, loaded from a CDN. No build step is needed.

## Run the project

Open `index.html` in your browser. An internet connection is required to load jQuery from the CDN. Use the navbar to navigate between all five parts. Open Developer Tools → Console to see `jQuery is ready!`.

## Pages and tasks

- `index.html`: Tasks 0–1 — ready handler, ID/class/tag selectors, `.text()`, `.html()` and `.css()`.
- `effects.html`: Tasks 2–4 — hide/show/toggle, fade methods and slide methods.
- `dom.html`: Tasks 5–7 — append/prepend/remove, changing image and link attributes, live form preview.
- `animations.html`: Tasks 8–10 — basic, sequential and combined animations with reset buttons.
- `project.html`: Task 11 — FAQ accordion with slide animations. Only one answer stays open.
- `js/script.js`: event handlers, with comments grouped by task.
- `css/style.css`: shared responsive styles.
- `images/`: two local SVG landscape illustrations.

## Publish using GitHub Pages

1. Create a GitHub repository and upload all project files, keeping `index.html` at the root and preserving the `css`, `js` and `images` folders.
2. Open repository **Settings → Pages**.
3. Select **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
4. Wait for GitHub to publish the site. The Pages settings will show its URL.
5. Submit the repository URL in Moodle and check the published website before your defense.

Alternative: upload the project folder through Netlify's manual deploy interface. No build command is needed.

## Manual checks

1. Visit all five pages using the navbar and check the console for errors.
2. Change text, HTML and styles on the first page.
3. Test all visibility, fade and slide buttons, including repeated clicks.
4. Append and prepend list items. Remove all items and click Remove once more.
5. Switch the image and link twice. Type and erase a name/email; the preview should follow immediately.
6. Run and reset each animation. The sequence should return to the starting position.
7. Open different accordion questions, then close the current question. Test buttons using Tab and Enter.
8. Check a narrow browser window. If reduced motion is enabled on your device, effects finish immediately.

## Кратко для защиты

- `$` — сокращение для `jQuery`. `$(document).ready(...)` запускает обработчики после готовности DOM.
- `#id` выбирает элемент по ID, `.class` — элементы по классу, `small` — элементы по тегу.
- `.text()` работает с обычным текстом, `.html()` распознаёт HTML. Пользовательский ввод выводится через `.text()`.
- `.hide()` скрывает элемент, `.show()` показывает, `.toggle()` переключает состояние.
- Fade изменяет прозрачность, slide сворачивает или разворачивает элемент.
- `.append()` добавляет внутрь элемента в конец, `.prepend()` — в начало. `.remove()` удаляет выбранный элемент из DOM.
- `.attr()` читает или меняет атрибут, `.val()` читает значение поля ввода.
- Для движения квадрата используется `position: absolute` внутри `position: relative`.
- `.animate({ left: 100, width: 100 }, 800)` меняет числовые CSS-свойства за 800 мс.
- Цепочка `.animate()` выполняется последовательно. Свойства внутри одного вызова изменяются одновременно.
- `.stop(true, true)` очищает очередь и завершает текущий эффект, чтобы быстрые клики не накапливали анимации.
- В аккордеоне `.not(answer)` исключает текущий ответ из списка закрываемых панелей.

Before submission, review the code and practice changing a selector, animation duration and list item text yourself.

## References

- [jQuery API](https://api.jquery.com/)
- [Document ready](https://api.jquery.com/ready/)
- [Animate](https://api.jquery.com/animate/)
- [W3Schools jQuery tutorial](https://www.w3schools.com/jquery/)
