<template>
    <div class="docs-demo-block">
        <slot name="source"></slot>
        <div class="docs-demo-meta" ref="meta" v-show="isExpanded">
            <div class="description" v-if="$slots.default">
                <slot></slot>
            </div>
        </div>
        <div class="demo-block-control" @click="isExpanded = !isExpanded">
            {{ isExpanded ? '隐藏代码' : '显示代码' }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'demo-block',
        data () {
            return {
                isExpanded: false
            };
        }
    };
</script>

<style lang="less">
    .docs-demo-block{
        border: 1px solid #eaeefb;
        border-radius: 4px;
        .source {
            padding: 24px;
        }
        .docs-demo-meta {
            p {
                padding-left: 24px;
            }
            pre, .hljs, code {
                margin-bottom: 0;
            }
            .hljs, code {
                border-bottom: none;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
        .demo-block-control {
            border-top: 1px solid #eaeefb;
            height: 36px;
            line-height: 36px;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            text-align: center;
            margin-top: -1px;
            color: #d3dce6;
            cursor: pointer;
        }
    }
</style>
