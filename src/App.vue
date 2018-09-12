<template>
  <v-app>
    <v-content>
      <v-container>
        <h1>牛耕式ビューワー</h1>
        <v-layout row wrap>
          <v-flex d-flex xs12 md6 class="box">
            <v-textarea
              auto-grow
              outline
              label="原文(テキストを編集できます)"
              v-model="text">
            </v-textarea>
          </v-flex>
          <v-flex d-flex xs12 md6 class="box">
            <div class="textBoxWrap">
              <div class="label">牛耕式</div>
              <div ref="textBox" class="textBox">
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import JQuery from 'jquery'
import Neko from './wagahaiha_neko.txt'
let $ = JQuery

export default {
  name: 'App',
  mounted () {
    this.boustrophedon()
    window.addEventListener('resize', this.handleResize)
  },
  data () {
    return {
      text: Neko
    }
  },
  methods: {
    boustrophedon () {
      let textBox = $(this.$refs.textBox)
      textBox.empty()
      let currentBox = $('<div></div>')
      textBox.append(currentBox)
      for (let i = 0; i < this.text.length; i++) {
        let height = currentBox.height()
        if (height === 0) {
          currentBox.text(currentBox.text() + this.text[i])
        } else if (this.text[i] === '\n') {
          currentBox.append('<br />')
          currentBox = $('<div></div>')
          textBox.append(currentBox)
        } else {
          currentBox.text(currentBox.text() + this.text[i])
          if (currentBox.height() > height) {
            currentBox.text(currentBox.text().slice(0, -1))
            currentBox = $('<div></div>')
            textBox.append(currentBox)
            currentBox.text(this.text[i])
          }
        }
      }
    },
    handleResize () {
      this.boustrophedon()
    }
  },
  watch: {
    text () {
      this.boustrophedon()
    }
  }
}
</script>

<style>
.label {
    font-size: 12px;
}
.box {
    padding: 20px;
}
.textBoxWrap {
    border-radius: 4px;
    border: 2px solid black;
    padding: 15px;
}
.textBox {
    font-size: 15px;
    line-height: 1.3;
}
.textBox div:nth-child(even) {
    transform: rotateY( 180deg );
}
</style>
