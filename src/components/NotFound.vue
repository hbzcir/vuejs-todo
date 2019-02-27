<template>
<div class="container">
  <h2>Err</h2>
  404
</div>
</template>

<script>
export default {
    data () {
        return {
            todos: [
                {
                    name: '청소'
                },
                {
                    name: '공부'
                },
                {
                    name: '잠자기'
                },
                {
                    name: '먹기'
                }
            ]
        }
    },
    mounted () {
        console.log('component mounted')
    }
}
</script>
