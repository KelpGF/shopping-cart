<template>
	<div class="card">
		<div class="flex flex-wrap align-items-center justify-content-center">
			<PCard class="mt-4">
				<template #title>
					<h1>Kelps List</h1>
				</template>
				<template #content>
					<div class="justify-content-center card-container">
						<div class="p-fluid formgrid grid">
							<div class="col-12 field">
								<PInputText
									v-model="item.desc"
									type="text"
									placeholder="Item"
								/>
							</div>
							<div class="col-5 field">
								<PInputNumber
									v-model="item.unitValue"
									placeholder="Vl Uni"
									mode="currency"
									locale="pt-BR"
									currency="BRL"
									:min="0"
									:maxFractionDigits="2"
								/>
							</div>
							<div class="col-5 field">
								<PInputNumber
									v-model="item.qtd"
									placeholder="QTD"
									:min="0"
									:maxFractionDigits="3"
									mode="decimal"
								/>
							</div>
							<div class="col-2 field text-right">
								<PButton
									@click="addItem"
									icon="pi pi-check-square"
									class="p-button-rounded p-button-success"
								/>
							</div>

							<PDivider type="dashed" />

							<div class="col-6 field">
								<PInputText
									type="text"
									placeholder="Filtrar"
									v-model="filter"
								/>
							</div>
							<div class="col-6 text-right font-semibold">
								<span class="text-2xl"> {{ totalValue }} </span>
							</div>
						</div>
						<div
							class="mt-2 grid border-round-sm border-primary scalein animation-duration-500"
							:key="item.id"
							v-for="item of itemToShow"
						>
							<div class="col-5">
								{{ item.desc }}
							</div>
							<div class="col-5">
								{{ convertToReal(item.unitValue) }} x {{ convertToStringBr(item.qtd, 3) }} =
								{{ convertToReal(item.unitValue * item.qtd) }}
							</div>
							<div class="col-2 text-right">
								<PButton
									@click="() => removeItem(item.id)"
									icon="pi pi-trash"
									class="p-button-sm p-button-outlined p-button-danger"
								/>
							</div>
						</div>
					</div>
				</template>
			</PCard>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
	import { Item } from '@/shared/types/items';
	import { convertToReal, convertToStringBr } from '@/shared/util/numbers';
	import { getItem, setItem } from '@/shared/util/sessionStorage';
	import { KeysStorage } from '@/shared/enums';

	export default defineComponent({
		name: 'HomeView',

		setup() {
			const filter = ref('');

			let item = reactive({
				id: new Date().getTime(),
				desc: '',
				qtd: 0,
				unitValue: 0,
			});
			const items = ref([] as Item[]);
			const itemToShow = computed(() =>
				!filter.value
					? items.value
					: items.value.filter((item) => Object.values(item).toString().includes(filter.value)),
			);
			const totalValue = computed(() =>
				convertToReal(items.value.map((item) => item.unitValue * item.qtd).reduce((prev, curr) => prev + curr, 0)),
			);

			const addItem = (): void => {
				console.log({ ...item });

				if (item.desc && item.unitValue > 0 && item.qtd > 0) {
					items.value.push({ ...item });

					item.id = new Date().getTime();
					item.desc = '';
					item.qtd = 0;
					item.unitValue = 0;

					setItem(KeysStorage.LIST_ITEM, JSON.stringify(items.value));
				}
			};
			// const updateItem = (id: number): void => {
			// 	items.value = items.value.filter((item) => item.id != id);
			// };
			const removeItem = (id: number): void => {
				items.value = items.value.filter((item) => item.id != id);

				setItem(KeysStorage.LIST_ITEM, JSON.stringify(items.value));
			};

			onMounted(() => {
				const storeItems = JSON.parse(getItem(KeysStorage.LIST_ITEM) || '[]');

				if (storeItems) items.value = storeItems;
			});

			return {
				filter,
				item,
				itemToShow,
				totalValue,
				addItem,
				removeItem,
				convertToReal,
				convertToStringBr,
			};
		},
	});
</script>
