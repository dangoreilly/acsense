<template>
  	<div v-html="diffHtml"></div>
</template>

<script setup>
// import { ref, computed } from 'vue'
import { createTwoFilesPatch } from 'diff'
import * as Diff2Html from 'diff2html';
import 'diff2html/bundles/css/diff2html.min.css'

const props = defineProps({
	oldText: {
		type: String,
		default: ""
	},
	newText: {
		type: String,
		default: ""
	},
	title: {
		type: String,
		default: "Changes"
	}
})

// Generate the diff as a unified diff format
const diffText = computed(() =>
  	createTwoFilesPatch(
		props.title, 
		props.title, 
		props.oldText, 
		props.newText)
)

// Render as pretty HTML with diff2html
const diffHtml = computed(() =>
	Diff2Html.html(diffText.value, {
		inputFormat: 'diff',
		drawFileList: false,
		outputFormat: 'side-by-side', // or 'line-by-line'
		matching: 'words',

	})
	)
</script>
