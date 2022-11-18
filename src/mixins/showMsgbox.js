const showMsgboxMixin = {
    created() {},
    methods: {
        /**
         * 弹出确认框，比如：删除、下架等操作，避免用户误操作
         */
        showMsgbox(options = {}, successMessage) {
            return this.$msgbox({
                type: 'warning',
                title: '提示',
                message: `您确定要 ${options.label || '操作'} 当前记录吗？`,
                showCancelButton: true,
                closeOnClickModal: true,
                lockScroll: false,
                beforeClose: (action, instance, done) => {
                    const { remoteMethod, successAction } = options;

                    if (action === 'confirm' && typeof remoteMethod === 'function') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = '处理中...';

                        remoteMethod()
                            .then((res) => {
                                this.$message.success(res.message || successMessage || '操作成功');
                                if (typeof successAction === 'function') {
                                    successAction();
                                }
                                /** 处理table默认重新请求数据,或者其他页面可以添加该方法就不需要再传入successAction */
                                this.requestData && this.requestData();
                            })
                            .catch(() => {})
                            .finally(() => {
                                instance.confirmButtonLoading = false;
                                instance.confirmButtonText = options.confirmButtonText || '确定';
                                done();
                            });
                    } else {
                        done();
                    }
                },
                ...options, // 可自定义 ElMessageBox 原始参数进行覆盖
            }).catch(() => {});
        },
    },
};

export default showMsgboxMixin;
