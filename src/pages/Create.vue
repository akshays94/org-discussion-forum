<template>
  <div>
    <div class="txt--main-title">
      Create
    </div>
    <div class="form-container">
      <form>
        <v-text-field
          v-model="name"
          label="Title"
          required>
        </v-text-field>

        <label for="">Tags</label>
        <v-combobox
          v-model="chips"
          :items="items"
          label="Your favorite hobbies"
          chips
          clearable
          solo
          multiple>
          <template v-slot:selection="data">
            <v-chip
              :selected="data.selected"
              close
              @input="remove(data.item)">
              <strong>{{ data.item }}</strong>&nbsp;
              <span>(interest)</span>
            </v-chip>
          </template>
        </v-combobox>

        <label for="">Content</label>
        <quill-editor
          v-model="currentTextContent"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="isNotEditMode_Content = true"
          @change="addTextContent({ dayIndex: dayIndex, eventIndex: eventIndex, eventItemIndex: eventItemIndex, content: content })"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)">
        </quill-editor>

        <br>
        <v-btn color="success">POST</v-btn>
        <v-btn color="info">CANCEL</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { ListLoader } from 'vue-content-loader'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    ListLoader,
    quillEditor
  },
  data () {
    return {
      chips: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
      items: ['Streaming', 'Eating']
    }
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }
}
</script>

<style>
  .form-container {
    padding: 24px;
    background: white;
    box-shadow: 0 2px 3px 0 lightgray;
  }
</style>
