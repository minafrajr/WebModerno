<template>
	<v-container fluid>
		<v-form>
			<v-file-input
				v-model="files"
				label="Selecione as legendas"
				prepend-icon="mdi-message-text"
				append-outer-icon="mdi-send"
				outlined
				multiple
				chips
				@click:append-outer="processSubtitles"
			>
				<template v-slot:selection="{ text }">
					<v-chip small label color="primary">
						{{ text }}
					</v-chip>
				</template>
			</v-file-input>
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
import { ipcRenderer } from 'electron';
import Pill from './Pill.vue';
export default {
	components: { Pill },
	data: () => ({
		files: [],
		groupedWords: [{ name: 'pen', amount: 21 }],
	}),
	methods: {
		processSubtitles() {
			/*DOM objects etc. are not serializable. Electron 9.0 (and newer) throws "object could not be cloned" error when unserializable objects are sent.
			 */
			const paths = this.files.map((f) => f.path);

			ipcRenderer.send('process-subtitles', paths);

			ipcRenderer.on('process-subtitles', (event, resp) => {
				this.groupedWords = resp;
			});
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
