
    function cal()
    {
          var annual_consumption = parseFloat(document.getElementById("annual_consumption").value);
          var cost_per_unit = parseFloat(document.getElementById("cost_per_unit").value);
          var p = parseInt(document.getElementById("panel_type").value);

        switch (p) 
        {
        case 1:
            monocal(annual_consumption,cost_per_unit);
            break;
        case 2:
            Polycal(annual_consumption,cost_per_unit);
            break;
        default:
           alert("Enter correct panel type")
        }
    }


 function monocal(annual_consumption,cost_per_unit) {
          
          var mpanel_efficiency =22;
          var panel_wattage= 100;
          var panel_cost= 32809;
        
          var daily_energy = annual_consumption / 365; 
          var panel_output = panel_wattage * (mpanel_efficiency / 100);
          var panels_required = Math.ceil(daily_energy / panel_output);

          var total_panel_cost = panels_required * panel_cost;
        
       
          var savings_per_year = annual_consumption * cost_per_unit;
          var payback_period = total_panel_cost / savings_per_year;
          var payback_month = payback_period * 12;

          let a = "Battery cost for a 250-watt monocrystalline solar panel system can vary depending on several factors such as brand, quality, capacity, and location.A good quality deep cycle battery with a capacity of 100Ah to 200Ah can cost between ₹12303 to ₹41012.Actual cost may vary depending on your location and the specific brands and models you choose.It's always recommended to do your research and compare prices from multiple suppliers to get the best deal.Additionally, you should also consider the installation and maintenance costs when budgeting for a solar panel system."
          let b = "Inverter for a 250-watt monocrystalline solar panel system can vary depending on several factors such as brand, quality, capacity, and location.An inverter with a capacity of 500W to 1000W can cost between ₹8202 to ₹41012.Actual cost may vary depending on your location and the specific brands and models you choose. It's always recommended to do your research and compare prices from multiple suppliers to get the best deal. Additionally, you should also consider the installation and maintenance costs when budgeting for a solar panel system."
         
          document.getElementById("panels_required").innerHTML = panels_required + " (100 watts per panel)";
          document.getElementById("total_panel_cost").innerHTML = total_panel_cost.toFixed(2);
          document.getElementById("payback_month").innerHTML = payback_month.toFixed(2);
          document.getElementById("battery").innerHTML = a;
          document.getElementById("invertor").innerHTML = b;
        }

function Polycal(annual_consumption,cost_per_unit) {

        const popanel_efficiency =18;
        var panel_wattage=100;
        var panel_cost=24607;
        
          var podaily_energy = annual_consumption / 365; 
          var popanel_output = panel_wattage * (popanel_efficiency / 100);
          var popanels_required = Math.ceil(podaily_energy / popanel_output);
        
          var pototal_panel_cost = popanels_required * panel_cost;
        
          var posavings_per_year = annual_consumption * cost_per_unit;
          var popayback_period = pototal_panel_cost / posavings_per_year;
          var popayback_month = popayback_period * 12;

          let a = "Battery cost for a 250-watt monocrystalline solar panel system can vary depending on several factors such as brand, quality, capacity, and location.A good quality deep cycle battery with a capacity of 100Ah to 200Ah can cost between ₹12303 to ₹41012.Actual cost may vary depending on your location and the specific brands and models you choose.It's always recommended to do your research and compare prices from multiple suppliers to get the best deal.Additionally, you should also consider the installation and maintenance costs when budgeting for a solar panel system."
          let b = "Inverter for a 250-watt monocrystalline solar panel system can vary depending on several factors such as brand, quality, capacity, and location.An inverter with a capacity of 500W to 1000W can cost between ₹8202 to ₹41012.Actual cost may vary depending on your location and the specific brands and models you choose. It's always recommended to do your research and compare prices from multiple suppliers to get the best deal. Additionally, you should also consider the installation and maintenance costs when budgeting for a solar panel system."
  
          document.getElementById("panels_required").innerText = popanels_required + " (100 watts per panel)";
          document.getElementById("total_panel_cost").innerText =pototal_panel_cost.toFixed(2);
          document.getElementById("payback_month").innerText = popayback_month.toFixed(2);
          document.getElementById("battery").innerHTML = a;
          document.getElementById("invertor").innerHTML = b;
          
        }