
<template>

    <div v-if="quote" class="quote-container ">

        <!-- Start Row -->
        <div class="font-bold">
            Machine
        </div>

        <div>

        </div>

        <div class="font-bold">
            Retail Price
        </div>

        <div class="font-bold">
            Wholesale
        </div>

        <div class="font-bold">
            Profit
        </div>
        <!-- End Row -->


        <!-- Start Row -->
        <div>
            <va-select v-model="quote" label="Model" :options="options" />
        </div>

        <div>
            <va-select v-model="quote.machine.model.variant" label="Variant" :options="options" />
        </div>

        <div class="rrPrice">
            <va-input readonly v-model="quote.machine.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.machine.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.machine.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div>
            <va-select v-model="quote.waterOption.description" label="Water Option" :options="options" />
        </div>

        <div>

        </div>

        <div>
            <va-input readonly v-model="quote.waterOption.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.waterOption.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.waterOption.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="font-bold">
            Warranty
        </div>

        <div>

        </div>

        <div>

        </div>

        <div class="wsPrice">

        </div>

        <div class="profit">

        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-select v-model="quote.warranty.term" label="Term" :options="options" />
        </div>

        <div class="text-green-800 font-semibold">
            <va-select v-model="quote.warranty.term.cover" label="Cover" :options="options" />
        </div>

        <div>
            <va-input readonly v-model="quote.warranty.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.warranty.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.warranty.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="font-bold">
            Options
        </div>

        <div>

        </div>

        <div>

        </div>

        <div class="wsPrice">

        </div>

        <div class="profit">

        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-select
                v-model="quote.cardMachine.package"
                label="Card Machine"
                :options="catalogue"
                :text-by="(catalogue)=>catalogue.field.description"
                :value-by="(catalogue)=>catalogue.id"
            />
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>
            <va-input readonly v-model="quote.cardMachine.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.cardMachine.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.cardMachine.profit" />
        </div>
        <!-- End Row -->


        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-select
                v-model="quote.marketing.package"
                label="Marketing Pack"
                :options="options"
                :text-by="(catalogue)=>catalogue.field.description"
                :value-by="(catalogue)=>catalogue.id"
            />
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>
            <va-input readonly v-model="quote.marketing.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.marketing.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.marketing.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="text-green-800 font-semibold">

            <!-- TODO: jiojodd -->
            <va-select
                v-model="quote.merchandising.package"
                label="Merchandising"
                :options="catalogue"
                :text-by="(catalogue)=>catalogue.field.description"
                :value-by="(catalogue)=>catalogue.id"
            />
          </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div class="rrPrice">
            <va-input readonly v-model="quote.merchandising.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly initial="0" v-model="quote.merchandising.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.merchandising.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-select
                v-model="quote.drinkPack.package"
                label="Drink Pack"
                :options="options"
                :text-by="(catalogue)=>catalogue.field.description"
                :value-by="(catalogue)=>catalogue.id"
            />
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>
            <va-input readonly v-model="quote.drinkPack.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.drinkPack.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.drinkPack.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="font-bold">
            Subtotal
        </div>

        <div>

        </div>

        <div class="font-bold">
            Retail Price
        </div>

        <div class="font-bold">
            Wholesale
        </div>

        <div class="font-bold">
            Profit
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="font-bold">

        </div>

        <div>

        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.subTotal.rrPrice" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.subTotal.wsPrice" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.subTotal.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="font-bold">
            Adjustments
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>

        </div>

        <div class="wsPrice">

        </div>

        <div class="profit">

        </div>
        <!-- End Row -->




        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-input v-model="quote.additions.rrPrice" label="Additions" />
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>
            <va-input readonly v-model="quote.additions.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.additions.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.additions.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-input v-model="quote.discount.percentage" label="Discount %" />
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>
            <va-input readonly v-model="quote.discount.rrPrice" />
        </div>

        <div class="wsPrice">

        </div>

        <div class="profit">
            <va-input readonly v-model="quote.discount.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="font-bold">
            Total
        </div>

        <div>

        </div>

        <div class="font-bold">
            Retail Price
        </div>

        <div class="font-bold">
            Wholesale
        </div>

        <div class="font-bold">
            Profit
        </div>
        <!-- End Row -->


        <!-- Start Row -->
        <div class="font-bold">

        </div>

        <div>

        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.total.rrPrice" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.total.wsPrice" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.total.profit" />
        </div>
        <!-- End Row -->


        <!-- Start Row -->
        <div class="font-bold">
            Finance (est.)
        </div>

        <div>

        </div>

        <div>

        </div>

        <div class="wsPrice">

        </div>

        <div class="profit">

        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-select v-model="quote.finance.term" label="Term" :options="options" />
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>
            <va-input readonly v-model="quote.finance.rrPrice" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.finance.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.finance.profit" />
        </div>
        <!-- End Row -->

        <!-- Start Row -->
        <div class="text-green-800 font-semibold">
            <va-input readonly v-model="quote.financeFee.fee" label="Acceptance Fee???" />
        </div>

        <div class="text-green-800 font-semibold">

        </div>

        <div>
            <va-input readonly v-model="quote.financeFee.fee" />
        </div>

        <div class="wsPrice">
            <va-input readonly v-model="quote.financeFee.wsPrice" />
        </div>

        <div class="profit">
            <va-input readonly v-model="quote.financeFee.profit" />
        </div>
        <!-- End Row -->



        <!-- Start Row -->
        <div class="font-bold">
            Final Price
        </div>

        <div>

        </div>

        <div class="font-bold">
            Retail Price
        </div>

        <div class="font-bold">
            Wholesale
        </div>

        <div class="font-bold">
            Profit
        </div>
        <!-- End Row -->


        <!-- Start Row -->
        <div class="font-bold">

        </div>

        <div>

        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.finalPrice.rrPrice" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.finalPrice.wsPrice" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.finalPrice.profit" />
        </div>
        <!-- End Row -->


        <!-- Put this in footer -->
        <!-- Start Row -->
        <div class="font-bold">
            Finance Breakdown
        </div>

        <div class="font-bold">
            Monthly
        </div>

        <div class="font-bold">
            Weekly
        </div>
        <div class="font-bold">
            Daily 7
        </div>
        <div class="font-bold">
            Daily 5
        </div>
        <!-- End Row -->


        <!-- Start Row -->
        <div class="font-bold">

        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.financeBreakdown.monthly" />
        </div>
        <div class="font-bold">
            <va-input readonly v-model="quote.financeBreakdown.weekly" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.financeBreakdown.daily7" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.financeBreakdown.daily5" />
        </div>
        <!-- End Row -->

        <!-- Put this in footer -->
        <!-- Start Row -->
        <div class="font-bold">
            Commission
        </div>

        <div>

        </div>

        <div class="font-bold">
            Provided Lead
        </div>
        <div class="font-bold">
            Self Generated
        </div>
        <div class="font-bold">
            % of Deal
        </div>
        <!-- End Row -->



        <!-- Start Row -->
        <div class="font-bold">
            <va-input readonly v-model="quote.commission.leadSource" />
        </div>

        <div class="font-bold">

        </div>
        <div class="font-bold">
            <va-input readonly v-model="quote.commission.providedLead" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.commission.selfGenerated" />
        </div>

        <div class="font-bold">
            <va-input readonly v-model="quote.commission.percentageOfDeal" />
        </div>
        <!-- End Row -->










    </div>


<br>
<br>
<br>
<br>
<br>


</template>

<script setup>

import { ref, reactive, onMounted, computed, watch } from 'vue'

import { defineComponent } from 'vue';
import { useCatalogueStore } from '../stores/storeCatalogue'

const catalogueStore = useCatalogueStore()








const catalogue = reactive(catalogueStore.catalogue)
const options = ['a','b']
const value = ref()
const brand = ref()
const model = ref()
const plumbing = ref()

let quote = reactive (
    {
    "machine": {
      "model": "xx",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "waterOption": {
      "description": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "warranty": {
      "term": "",
      "cover": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "cardMachine": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "marketing": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "merchandising": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "drinkPack": {
      "package": "0",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "subTotal": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "discount": {
      "percentage": 0,
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "additions": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "total": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "finance": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "financeFee": {
      "fee": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "finalPrice": {
      "model": "",
      "variant": "",
      "rrPrice": 0,
      "wsPrice": 0,
      "profit": 0
    },
    "financeBreakdown": {
      "model": "",
      "monthly": "",
      "weekly": 0,
      "daily7": 0,
      "daily5": 0
    },
    "commission": {
      "leadSource": "",
      "providedLead": 0,
      "selfGenerated": 0,
      "percentageOfDeal": 0,
      "status": "closed",
      "success": "won"
    }
  }
)

quote.cardMachine.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.cardMachine.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.cardMachine.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.cardMachine.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.marketing.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.marketing.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.marketing.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.marketing.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.merchandising.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.merchandising.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.merchandising.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.merchandising.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.drinkPack.rrPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.drinkPack.package == catalogue[option].id) {
            return catalogue[option].field.rrPrice
        }
    }
})

quote.drinkPack.wsPrice = computed(() => {
    for (let option in catalogue) {
        if (quote.drinkPack.package == catalogue[option].id) {
            return catalogue[option].field.wsPrice
        }
    }
})

quote.machine.profit = computed(() => {
    return parseInt(quote.machine.rrPrice) - parseInt(quote.machine.wsPrice)
})
quote.waterOption.profit = computed(() => {
    return parseInt(quote.waterOption.rrPrice) - parseInt(quote.waterOption.wsPrice)
})
quote.warranty.profit = computed(() => {
    return parseInt(quote.warranty.rrPrice) - parseInt(quote.warranty.wsPrice)
})
quote.cardMachine.profit = computed(() => {
    return parseInt(quote.cardMachine.rrPrice) - parseInt(quote.cardMachine.wsPrice)
})
quote.marketing.profit = computed(() => {
    return parseInt(quote.marketing.rrPrice) - parseInt(quote.marketing.wsPrice)
})
quote.merchandising.profit = computed(() => {
    return parseInt(quote.merchandising.rrPrice) - parseInt(quote.merchandising.wsPrice)
})
quote.drinkPack.profit = computed(() => {
    return parseInt(quote.drinkPack.rrPrice) - parseInt(quote.drinkPack.wsPrice)
})
quote.subTotal.profit = computed(() => {
    return parseInt(quote.subTotal.rrPrice) - parseInt(quote.subTotal.wsPrice)
})
quote.discount.rrPrice = computed(() => {
    return parseInt( - quote.subTotal.rrPrice) * parseInt(quote.discount.percentage) / 100
})
quote.discount.profit = computed(() => {
    return parseInt(quote.discount.rrPrice)
})
quote.additions.profit = computed(() => {
    return parseInt(quote.additions.rrPrice) - parseInt(quote.additions.wsPrice)
})
quote.total.profit = computed(() => {
    return parseInt(quote.total.rrPrice) - parseInt(quote.total.wsPrice)
})
quote.finance.profit = computed(() => {
    return parseInt(quote.finance.rrPrice) - parseInt(quote.finance.wsPrice)
})
quote.financeFee.profit = computed(() => {
    return parseInt(quote.financeFee.rrPrice) - parseInt(quote.financeFee.wsPrice)
})
quote.finalPrice.profit = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) - parseInt(quote.finalPrice.wsPrice)
})
quote.financeBreakdown.monthly = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 12 / parseInt(quote.finance.term)
})
quote.financeBreakdown.weekly = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 52 / parseInt(quote.finance.term)
})
quote.financeBreakdown.daily7 = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 52 / 7 / parseInt(quote.finance.term)
})
quote.financeBreakdown.daily5 = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 52 / 5 / parseInt(quote.finance.term)
})
quote.commission.providedLead = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 100 * 50
})
quote.commission.selfGenerated = computed(() => {
    return parseInt(quote.finalPrice.rrPrice) / 100 * 75
})
// TODO: Put actual lead source in here
quote.commission.percentageOfDeal = computed(() => {
    return (
        parseInt(quote.finalPrice.rrPrice) ?
        parseInt(quote.commission.selfGenerated) / parseInt(quote.finalPrice.rrPrice) * 100 :
        0
    )
})

quote.subTotal.rrPrice = computed(() => {
    const t =
        parseInt(quote.machine.rrPrice) +
        parseInt(quote.waterOption.rrPrice) +
        parseInt(quote.warranty.rrPrice) +
        parseInt(quote.cardMachine.rrPrice) +
        parseInt(quote.marketing.rrPrice) +
        parseInt(quote.merchandising.rrPrice) +
        parseInt(quote.drinkPack.rrPrice)
    return t
})
quote.subTotal.wsPrice = computed(() => {
    const t =
        parseInt(quote.machine.wsPrice) +
        parseInt(quote.waterOption.wsPrice) +
        parseInt(quote.warranty.wsPrice) +
        parseInt(quote.cardMachine.wsPrice) +
        parseInt(quote.marketing.wsPrice) +
        parseInt(quote.merchandising.wsPrice) +
        parseInt(quote.drinkPack.wsPrice)
    return t
})

quote.total.rrPrice = computed(() => {
    const t =
        parseInt(quote.machine.rrPrice) +
        parseInt(quote.waterOption.rrPrice) +
        parseInt(quote.warranty.rrPrice) +
        parseInt(quote.cardMachine.rrPrice) +
        parseInt(quote.marketing.rrPrice) +
        parseInt(quote.merchandising.rrPrice) +
        parseInt(quote.drinkPack.rrPrice) +
        parseInt(quote.discount.rrPrice) +
        parseInt(quote.additions.rrPrice)

    return t
})
quote.total.wsPrice = computed(() => {
    const t =
    parseInt(quote.machine.wsPrice) +
        parseInt(quote.waterOption.wsPrice) +
        parseInt(quote.warranty.wsPrice) +
        parseInt(quote.cardMachine.wsPrice) +
        parseInt(quote.marketing.wsPrice) +
        parseInt(quote.merchandising.wsPrice) +
        parseInt(quote.drinkPack.wsPrice) +
        parseInt(quote.discount.wsPrice) +
        parseInt(quote.additions.wsPrice)
    return t
})

quote.finalPrice.rrPrice = computed(() => {
    const t =
        parseInt(quote.machine.rrPrice) +
        parseInt(quote.waterOption.rrPrice) +
        parseInt(quote.warranty.rrPrice) +
        parseInt(quote.cardMachine.rrPrice) +
        parseInt(quote.marketing.rrPrice) +
        parseInt(quote.merchandising.rrPrice) +
        parseInt(quote.drinkPack.rrPrice) +
        parseInt(quote.discount.rrPrice) +
        parseInt(quote.additions.rrPrice) +
        parseInt(quote.financeFee.rrPrice) +
        parseInt(quote.finance.rrPrice)


    return t
})
quote.finalPrice.wsPrice = computed(() => {
    const t =
    parseInt(quote.machine.wsPrice) +
        parseInt(quote.waterOption.wsPrice) +
        parseInt(quote.warranty.wsPrice) +
        parseInt(quote.cardMachine.wsPrice) +
        parseInt(quote.marketing.wsPrice) +
        parseInt(quote.merchandising.wsPrice) +
        parseInt(quote.drinkPack.wsPrice) +
        parseInt(quote.discount.wsPrice) +
        parseInt(quote.additions.wsPrice) +
        parseInt(quote.financeFee.wsPrice) +
        parseInt(quote.finance.wsPrice)
    return t
})

// TODO: delete this
quote.finance.term = 3

const actual = ref(null)




</script>
