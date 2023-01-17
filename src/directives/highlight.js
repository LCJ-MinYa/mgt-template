import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js';

export default function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightElement(block);
        // 从这开始是设置行号
        block.innerHTML = `<ol><li>${block.innerHTML.replace(/\n/g, `</li><li class="line">`)}</li></ol>`;
    });
}
