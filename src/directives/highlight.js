import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js';
import clipboardJS from 'clipboard';
import Vue from 'vue';

export default {
    bind: function (el, binding) {
        /** 复制代码方法 */
        binding.copyCode = () => {
            binding.clipboard = new clipboardJS(`.copy-code${binding.expression}`, {
                text: () => binding.value,
            });
            binding.clipboard.on('success', () => {
                Vue.prototype.$message.success('复制成功');
            });
            binding.clipboard.on('error', () => {
                Vue.prototype.$message.error('复制失败');
            });
        };

        /** 执行代码方法 */
        binding.executeCode = () => {
            new Function(binding.value)();
            Vue.prototype.$message.success('执行完毕，请根据代码查看对应输出');
        };

        /** pre添加code样式 */
        el.classList.add('code');

        const blocksNode = el.querySelectorAll('pre code');
        blocksNode[0].innerHTML = binding.value;
        blocksNode.forEach((block) => {
            hljs.highlightElement(block);
            /** 从这开始是设置行号 */
            block.innerHTML = `<ol><li>${block.innerHTML.replace(/\n/g, `</li><li class="line">`)}</li></ol>`;
            /** 添加复制代码，执行代码功能 */
            block.innerHTML += `<div class="btn-box">
                <button type="button" class="el-button el-button--text is-round copy-code${binding.expression}">复制代码</button>
                <button type="button" class="el-button el-button--text is-round execute-code">执行代码</button>
            </div>`;
        });

        el.querySelector(`.copy-code${binding.expression}`).addEventListener('click', binding.copyCode);
        el.querySelector('.execute-code').addEventListener('click', binding.executeCode);
    },
    unbind(el, binding) {
        binding.clipboard.destroy();
        el.querySelector(`.copy-code${binding.expression}`).removeEventListener('click', binding.copyCode);
        el.querySelector('.execute-code').removeEventListener('click', binding.executeCode);
    },
};
