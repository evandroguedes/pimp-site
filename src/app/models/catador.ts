import { Phone } from './phone'
import { Material } from './material';


export class Catador {

    public id: number = 0;
    public name: string = '';
    public prefererUseName: boolean = true;
    public email: string = '';
    public password: string = '';
    public minibio: string = '';
    public nickname: string = '';
    public presentation_phrase: string = '';
    //public birthDay: Date = new Date();
    public phones: Array<Phone> = new Array<Phone>();
    public address_base: string = '';
    public number: string = '';
    public address_region: string = '';
    public region: string = '';
    public city: string = '';
    public state: string = '';
    public country: string = '';
    public kg_day: number;
    public how_many_days_work_week: number;
    public how_many_years_work: number;
    public belongsCooperative: boolean = false;
    public cooperative_name: string = '';
    public iron_work: string = '';
    public materials_collected: Array<any> = new Array<any>();
    public safety_kit: boolean = false;
    public has_motor_vehicle: boolean = false;
    public has_smartphone_with_internet: boolean = false;
    public safety_kit_boot: boolean = false;
    public safety_kit_gloves: boolean = false;
    public safety_kit_brakes: boolean = false;
    public safety_kit_reflective_tapes: boolean = false;
    public safety_kit_rearview: boolean = false;
    public carroca_pimpada: boolean = false;
    public registered_by_another_user: boolean = false;
    public another_user_name: string = '';
    public another_user_email: string = '';
    public another_user_whatsapp: string = '';
    public image: string = '';
    public year_of_birth: any;
    public user: string = '';

    constructor() {
        this.phones[0] = new Phone();
        this.phones[1] = new Phone();
    }

    /**
     * Return true if valid and the field name if invalid
     */
    valid() {
        if (!this.name || this.name.length == 0) {
            return 'name';
        } else if (!this.nickname || this.nickname.length == 0) {
            return 'nickname';
        } else if (!this.presentation_phrase || this.presentation_phrase.length == 0) {
            return 'presentation_phrase';
        } else if (!this.minibio || this.minibio.length == 0) {
            return 'minibio';
        } else if (!this.phones[0].phone || this.phones[0].phone.length == 0) {
            return 'phones0';
        // } else if (!this.address_base || this.address_base.length == 0) {
        //     return 'address_base';
        // } else if (!this.number || this.number.length == 0) {
        //     return 'number';
        // } else if (!this.address_region || this.address_region.length == 0) {
        //     return 'address_region';
        // } else if (!this.city || this.city.length == 0) {
        //     return 'city';
        // } else if (!this.state || this.state.length == 0) {
        //     return 'state';
        // } else if (!this.country || this.country.length == 0) {
        //     return 'country';
        // } else if (!this.cooperative_name || this.cooperative_name.length == 0) {
        //     return 'cooperative_name';    
        // } else if (!this.kg_day || this.kg_day == 0) {
        //     return 'kg_day';  
        // } else if (!this.how_many_days_work_week || this.how_many_days_work_week == 0) {
        //     return 'how_many_days_work_week';    
        // } else if (!this.how_many_years_work || this.how_many_years_work == 0) {
        //     return 'how_many_years_work';
        // } else if (!this.region || this.region.length == 0) {
        //     return 'region';
        } 
        
        return true;
    }

    addMaterialOrRemoveIfAlreadyIncluded(material: Material){
        var found = false;

        for(let i=0; i<this.materials_collected.length; i++){
            if (material.id === this.materials_collected[i]){
                this.materials_collected.splice(i, 1);
                found = true;
                return 0;
            }
        }

        if (!found)
            this.materials_collected.push(material.id);
    }

}
