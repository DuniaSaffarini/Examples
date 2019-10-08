(function ($) {
$.fn.shuffleeString=function(){

    return this.each(function () {
      $(this).text(shuffelString($(this).text));// this refer to h2

        function shuffelString(str) {
            var array=str+''.split("");
            for(var i=array.length;i>0;i--){

                var value=Math.floor((Math.random()*(i+1)));
                var temp=array[i];
                array[i]=array[value];
                array[value]=temp;

            //    var array=str[array.length-1];

            }
            return array.join("");
        }

    })

}
}(jQuery));
