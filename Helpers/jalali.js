import moment from "jalali-moment";

export let format_date = (date) => {
    return moment().locale('fa').format("D MMM YYYY");
}