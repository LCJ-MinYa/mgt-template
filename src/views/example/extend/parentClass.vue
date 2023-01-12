<script>
export default {
    data() {
        return {};
    },
    render() {
        return (
            <baseContainer>
                <baseMain>{this.$slots.default}</baseMain>
                <baseFooter showGoBack />
            </baseContainer>
        );
    },
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
</style>