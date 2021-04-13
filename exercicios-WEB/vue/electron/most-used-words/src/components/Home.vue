<template>
	<v-container fluid>
		<v-form>
			<v-file-input
				label="Selecione as legendas"
				prepend-icon="mdi-message-text"
				append-outer-icon="mdi-send"
				outlined
				multiple
				chips
				v-model="files"
				@click:append-outer="processSubtitles"
			/>
		</v-form>
		<div class="pills">
			<Pill
				v-for="word in groupedWords"
				:key="word.name"
				:name="word.name"
				:amount="word.amount"
			/>
		</div>
	</v-container>
</template>

<script>
import Pill from './Pill.vue';

export default {
	components: { Pill },
	data: function() {
		return {
			files: [],
			groupedWords: [{ name: 'house', amount: 21 }],
		};
	},
	methods: {
		processSubtitles() {
			console.log('processSubtitle');
		},
	},
};
</script>

<style>
.pills {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
</style>
