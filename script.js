function cria() {
   var num = (parseInt(document.getElementById("num").value, 10))
   var tab = document.createElement("table")
   var res = document.getElementById("res")

   res.innerHTML = ""
   if (num == 0) {
      alert("erro")
   } else {
      res.appendChild(tab)

      for (c = 1 ; c <= 10 ; c ++) {
         var tr = document.createElement("tr")
         var td = document.createElement("td")

         td.innerHTML = `${num} x ${c} = ${num * c}`
         tr.appendChild(td)
         tab.appendChild(tr)
      }
   }
}