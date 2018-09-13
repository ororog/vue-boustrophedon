<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-btn>
        吾輩は猫である
      </v-btn>
      <v-btn>
        銀河鉄道の夜
      </v-btn>
      <v-btn>
        Alice in Wonderland
      </v-btn>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>牛耕式ビューワー</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex d-flex xs12 md6 class="box">
            <v-card>
              <v-textarea
                auto-grow
                outline
                hide-details
                label="原文(テキストを編集できます)"
                v-model="text">
              </v-textarea>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 md6 class="box">
            <v-card class="textBoxWrap">
              <div class="label">牛耕式</div>
              <div ref="textBox" class="textBox"></div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import JQuery from 'jquery'
import Neko from './wagahaiha_neko.txt'
import Alice from './alice.txt'
let $ = JQuery

export default {
  name: 'App',
  mounted () {
    this.boustrophedon()
    window.addEventListener('resize', this.handleResize)
  },
  data () {
    return {
      drawer: null,
      text: Alice
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
        if (this.text[i] === '\n') {
          currentBox.append('<br />')
          currentBox = $('<div></div>')
          textBox.append(currentBox)
        } else {
          currentBox.text(currentBox.text() + this.text[i])
          if (height !== 0 && currentBox.height() > height) {
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
    padding: 10px;
}

.textBox {
    font-size: 15px;
    line-height: 1.3;
}

.textBox div:nth-child(even) {
    transform: rotateY( 180deg );
}
</style>
