const hbs = require("hbs")
const dayjs = require('dayjs')
const { options } = require("../routes/admin")

hbs.registerHelper('areTheSame', function (val1, val2, options){
	if(!val1 || !val2){
		return options.inverse(this)
	} 
	if (val1.toString() === val2.toString()) {
		return options.fn(this)
	} else {
		return options.inverse(this)
	}  
})

hbs.registerHelper("formatDateInput", function (date) {
	return dayjs(new Date(date)).format("YYYY-MM-DD");
});

hbs.registerHelper("formatDate", function (date) {
	return dayjs(date).format("DD/MM/YYYY");
});

hbs.registerHelper("hideAdmin", function (role, options) {
	if (role !== 'admin'){
		return options.fn(this)
	}else{
		return options.inverse(this)
	}
});