type TaxWithPart = {
  tranche: number,
  initial: number,
  taxe1: number,
  taxe2: number,
  taxe4: number,
  total: number
}

type NormalTax = {
  initial: number,
  taxe1: number,
  taxe2: number,
  taxe3: number,
  taxe4: number,
  total: number
}


function calculateTaxForCarsInsurance(description: string,insurance_type:string,permission_type:string,car_charge:number,car_nb_passager:number): NormalTax {
  let initial: number = 0;
  if(permission_type=="السيارات الخاصة"){
    switch (description) {
      case "من 0 إلى 16 حصان" :
        initial = 64;
        break;
      case "من 17 إلى 30 حصان" :
        initial = 70;
        break;
      case "أكثر من 30 حصان" :
        initial = 90;
        break
    }
    if(car_nb_passager>4){
      initial=((car_nb_passager-4)*5)+initial
    }
  }

  if(permission_type=="مقطورة خاصة"){
    initial = 30;
  }

  if(permission_type== "ركوبة عامة داخل المدينة"){
    initial = 64;
    if(car_nb_passager>4){
      initial=((car_nb_passager-4)*10)+initial
    }
  }

  if(permission_type== "ركوبة عامة خارج المدينة"){
    initial = 44;
    if(car_nb_passager>4){
      initial=((car_nb_passager-4)*15)+initial
    }
  }

  if(permission_type== "الحافلات"){
    initial = 84;
    if(car_nb_passager>14){
      initial=((car_nb_passager-14)*10)+initial
    }
  }

  if(permission_type== "سيارة نقل"){
    initial = 65;
    if(car_nb_passager>1){
      initial=((car_nb_passager-1)*15)+initial
    }
    if(car_charge>1){
      initial=((car_charge-1)*8)+initial
    }
  }


  if(permission_type== "رأس جر"){
    if(car_charge>=1&&car_nb_passager==0){
      initial = 50;
      if(car_charge>1){
        initial=((car_charge-1)*8)+initial
      }
    }
    else {
      initial = 65;
      if(car_charge>1){
        initial=((car_charge-1)*8)+initial
      }
    }
  }

  if(permission_type== "جرار زراعي"){
    initial = 16;
  }
  if(permission_type== "آلات ومعدات الحفر ورصف الطرق و الآلات الأخرى"){
    initial = 34;
  }
  if(permission_type== "دراجة نارية"){
    initial = 18;
  }
  
  /* calculer du taxe */
  let taxe1=0;
  let taxe3=0;
  if(initial/100<0.5){
    taxe1=0.5
  }
  else if(initial/100>0.5 ){
    taxe1=1
  }
  let taxe2=0.5
  taxe3=(initial/100)*0.5
  let taxe4=3

   
  if(insurance_type=="2"){
    initial=initial*2
    taxe1=taxe1*2
    taxe2=taxe2*2
    taxe3= taxe3*2
    taxe4= taxe4*2
  }

  if(insurance_type=="3"){
 
    initial=initial*3
    taxe1=taxe1*3
    taxe2=taxe2*3
    taxe3= taxe3*3
    taxe4= taxe4*3
  }
  
  let total=initial +taxe1+taxe2+taxe3+taxe4
  return {
    initial: initial,
    taxe1:taxe1,
    taxe2: taxe2,
    taxe3: taxe3,
    taxe4: taxe4,
    total: total
  }
}

export const TaxesHelper = {


  calculateObligatoryInsuranceTax(description: string,insurance_type:string,permission_type:string,car_charge:number,car_nb_passager:number): NormalTax {
    return calculateTaxForCarsInsurance(description,insurance_type,permission_type,car_charge,car_nb_passager)
  },

  calculateThirdPartInsuranceTax(description: string,insurance_type:string,permission_type:string,car_charge:number,car_nb_passager:number): NormalTax {
    return calculateTaxForCarsInsurance(description,insurance_type,permission_type,car_charge,car_nb_passager)
  },


  calculateTravelInsuranceTax(zone_couver: string, age: number, periodId: number): NormalTax {
    let initial = 0
    let taxe1 = 0.5
    let taxe2 = 0.5
    let taxe3 = 0.250
    let taxe4 = 5
    if (zone_couver == "European Countries") {
      if (age <= 15) {
        switch (periodId) {
          case 1:
            initial = 7
            break
          case 2:
            initial = 8
            break
          case 3:
            initial = 12
            break
          case 4:
            initial = 14
            break
          case 5:
            initial = 19
            break
          case 6:
            initial = 21
            break
          case 7:
            initial = 24
            break
          case 8:
            initial = 47
            break
          case 9:
            initial = 68
            taxe1 = 1
            taxe3 = 0.5
            break
          case 10:
            initial = 90
            taxe1 = 1
            taxe3 = 0.5
            break
          case 11:
            initial = 180
            taxe1 = 2
            taxe3 = 1
            break
        }
      } else {
        switch (periodId) {
          case 1:
            initial = 11
            break
          case 2:
            initial = 13
            break
          case 3:
            initial = 18
            break
          case 4:
            initial = 24
            break
          case 5:
            initial = 25
            break
          case 6:
            initial = 29
            break
          case 7:
            initial = 51
            break
          case 8:
            initial = 72
            break
          case 9:
            initial = 100
            taxe1 = 1
            taxe3 = 0.5
            break
          case 10:
            initial = 157
            taxe1 = 2
            taxe3 = 1
            break
          case 11:
            initial = 270
            taxe1 = 3
            taxe3 = 1.5
            break
        }
      }
    }
    // world wide
    else {
      if (age <= 15) {
        switch (periodId) {
          case 1:
            initial = -0.75
            break
          case 2:
            initial = 8
            break
          case 3:
            initial = 12
            break
          case 4:
            initial = 18
            break
          case 5:
            initial = 25
            break
          case 6:
            initial = 30
            break
          case 7:
            initial = 45
            break
          case 8:
            initial = 55
            break
          case 9:
            initial = 90
            taxe1 = 1
            taxe3 = 0.5
            break
          case 10:
            initial = 140
            taxe1 = 1.5
            taxe3 = 0.750
            break
          case 11:
            initial = 200
            taxe1 = 2
            taxe3 = 1
            break
        }
      } else {
        switch (periodId) {
          case 1:
            initial = -0.75
            break
          case 2:
            initial = 11
            break
          case 3:
            initial = 17
            break
          case 4:
            initial = 24
            break
          case 5:
            initial = 34
            break
          case 6:
            initial = 39
            break
          case 7:
            initial = 59
            taxe1 = 1
            taxe3 = 0.5
            break
          case 8:
            initial = 63
            taxe1 = 1
            taxe3 = 0.5
            break
          case 9:
            initial = 115
            taxe1 = 1.5
            taxe3 = 0.750
            break
          case 10:
            initial = 174
            taxe1 = 2
            taxe3 = 1
            break
          case 11:
            initial = 295
            taxe1 = 3
            taxe3 = 1.5
            break
        }
      }
    }
    return {
      initial: initial,
      taxe1: taxe1,
      taxe2: taxe2,
      taxe3: taxe3,
      taxe4: taxe4,
      total: initial + taxe1 + taxe2 + taxe3 + taxe4
    }
  },

  calculatePersonHealthInsuranceTax(type: string, job: string): NormalTax {
    let initial = 156.219
    /*if (type === 'صحي فرد') {
      if (job === 'أطباء و مستشارين') {
        initial = 190
      } else if (job === 'شبه طبي') {
        initial = 130
      }
    }*/
    let tax1 = 2
    let tax2 = 1
    let tax3 = 0.781
    let tax4 = 10

    return {
      initial: initial,
      taxe1: tax1,
      taxe2: tax2,
      taxe3: tax3,
      taxe4: tax4,
      total: Math.round(tax1 + tax3 + tax4 + tax2 + initial)
    }
  },

  calculateGroupHealthInsuranceTax(capital: number): TaxWithPart {
    let tranche = (capital / 100) * 5
    let initial = (capital / 100) * 3
    let tax1 = (tranche / 100)
    let tax2 = (tranche / 100) * 0.5
    let tax4 = 20
    return {
      tranche: tranche,
      initial: initial,
      taxe1: tax1,
      taxe2: tax2,
      taxe4: tax4,
      total: initial + tax1 + tax2 + tax4
    }
  }
}
