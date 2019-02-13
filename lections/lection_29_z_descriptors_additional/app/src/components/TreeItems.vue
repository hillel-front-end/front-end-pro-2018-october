<template>
    <div class="tree" v-html="renderRow(tree)" />
</template>

<script>
export default {
    name: "TreeItems",
    props: ['tree'],
    methods: {
        renderRow(tree){
            return tree.map(item => {
                return `
                <div class="tree__item">
                    ${item.title}
                    
                    <div class="tree__children-container">
                      ${(item.children && this.renderRow(item.children)) || ''}
                    </div>
                </div>`;
            }).join('');
        },
        getButtonRow(){
            return `<component :is="TreeButton"></component>`
        }
    }
}
</script>

<style lang="scss">
    .tree {
        width: 320px;
        position: relative;

        > .tree__item {
            position: relative;
        }

        &__children-container {
            position: absolute;
            left: 100%;
            top: 0;
            visibility: hidden;
            opacity: 0;
            transition: .2s;
        }

        &__item {
            cursor: pointer;
            padding: 5px 10px;
            border: 1px solid grey;
            transition: .1s;
            position: relative;

            &:hover {
                background-color: rgba(0, 0, 0, 0.1);

                > .tree__children-container {
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
    }
</style>
