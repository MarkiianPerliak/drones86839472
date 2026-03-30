const box = document.querySelector(".info__box")
const simo = document.getElementById("simo")
const fourx4 = document.getElementById("4x4")

const simoHtml = `
        <img draggable="false" class="header__logo" src="../assets/icons/fpvlogo.svg"></img>
        <img class="info__image" src="" alt="">
        <h2 data-i18n="infheadlines" class="info__headline"></h2>

        <ul class="info__list">
            <li class="info__item">
                <p data-i18n="inftext1" class="info__text"></p>
            </li>
            <li class="info__item">
                <p data-i18n="inftext2" class="info__text"></p>
            </li>
            <li class="info__item">
                <p data-i18n="inftext3" class="info__text"></p>
            </li>
            <li class="info__item">
                <p data-i18n="inftext4" class="info__text"></p>
            </li>
        </ul>

        <p data-i18n="infcontwarn" class="info__cont-warn"></p>

        <p data-i18n="email" class="info__email"></p>

        <p data-i18n="infwarn" class="info__warn"></p>
`

const fourx4Html = `
        <img draggable="false" class="header__logo" src="../assets/icons/fpvlogo.svg"></img>
        <img class="info__image" src="" alt="">
        <h2 data-i18n="infheadlineskp" class="info__headline"></h2>

        <ul class="info__list">
            <li class="info__item">
                <p data-i18n="inftext1kp" class="info__text"></p>
            </li>
            <li class="info__item">
                <p data-i18n="inftext2kp" class="info__text"></p>
            </li>
            <li class="info__item">
                <p data-i18n="inftext3kp" class="info__text"></p>
            </li>
        </ul>

        <p data-i18n="infcontwarn" class="info__cont-warn"></p>

        <p data-i18n="email" class="info__email"></p>

        <p data-i18n="infwarn" class="info__warn"></p>
`

simo.addEventListener("click", () => {
    box.innerHTML = simoHtml
})

fourx4.addEventListener("click", () => {
    box.innerHTML = fourx4Html
})