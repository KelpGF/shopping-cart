import { App } from 'vue';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import ToggleButton from 'primevue/togglebutton';
import TabMenu from 'primevue/tabmenu';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import InputNumber from 'primevue/inputnumber';
import ColorPicker from 'primevue/colorpicker';
import FileUpload from 'primevue/fileupload';

export default function (app: App<Element>) {
	app.use(PrimeVue).use(ToastService);

	app.component('PDialog', Dialog);
	app.component('PToast', Toast);
	app.component('PText', InputText);
	app.component('PCheckbox', Checkbox);
	app.component('PButton', Button);
	app.component('PMenubar', Menubar);
	app.component('PToggleButton', ToggleButton);
	app.component('PTabMenu', TabMenu);
	app.component('PDropdown', Dropdown);
	app.component('PRadioButton', RadioButton);
	app.component('PInputNumber', InputNumber);
	app.component('PColorPicker', ColorPicker);
	app.component('PFileUpload', FileUpload);
}
