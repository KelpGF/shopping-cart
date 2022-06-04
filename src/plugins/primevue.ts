import { App } from 'vue';

import PrimeVue from 'primevue/config';

import Card from 'primevue/card';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Divider from 'primevue/divider';

export default function (app: App<Element>) {
	app.use(PrimeVue);

	app.component('PCard', Card);
	app.component('PButton', Button);
	app.component('PInputNumber', InputNumber);
	app.component('PInputText', InputText);
	app.component('PDivider', Divider);
}
