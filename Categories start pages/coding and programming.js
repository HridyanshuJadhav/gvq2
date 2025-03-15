document.getElementById("coding_and_programming-question-div2").hidden = true;
document.getElementById("coding_and_programming-question-div3").hidden = true;

document.getElementById("coding_and_programming_level1_nextlevel").disabled = true;
document.getElementById("coding_and_programming_level2_nextlevel").disabled = true;

function coding_and_programming_level1_submit() {
  let coding_and_programming_result=0;
  let q1 = document.querySelector('input[name= q1]:checked');
  if ( q1 ==  q1_1) {
    coding_and_programming_result += 0;
    document.getElementById("q1_1_p").innerHTML = "&#x2715;";
    document.getElementById("q1_3_p").innerHTML = "&#x2713;";
    }
  if ( q1 ==  q1_2) {
    coding_and_programming_result += 0;
    document.getElementById("q1_2_p").innerHTML = "&#x2715;";
    document.getElementById("q1_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q1 ==  q1_3) {
    coding_and_programming_result += 1;
    document.getElementById("q1_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q1 ==  q1_4) {
    coding_and_programming_result += 0;
    document.getElementById("q1_4_p").innerHTML = "&#x2715;";
    document.getElementById("q1_3_p").innerHTML = "&#x2713;";
  }

  let  q2 = document.querySelector('input[name= q2]:checked');
  if ( q2 ==  q2_1) {
    coding_and_programming_result += 0;
    document.getElementById("q2_1_p").innerHTML = "&#x2715;";
    document.getElementById("q2_3_p").innerHTML = "&#x2713;";
  }
  if ( q2 ==  q2_2) {
    coding_and_programming_result += 0;
    document.getElementById("q2_2_p").innerHTML = "&#x2715;";
    document.getElementById("q1_3_p").innerHTML = "&#x2713;";
    }
  if ( q2 ==  q2_3) {
    coding_and_programming_result += 1;
    document.getElementById("q2_3_p").innerHTML = "&#x2713;";
   
  }
  if ( q2 ==  q2_4) {
    coding_and_programming_result += 0;
    document.getElementById("q2_4_p").innerHTML = "&#x2715;";
    document.getElementById("q2_3_p").innerHTML = "&#x2713;";
  }

  let  q3 = document.querySelector('input[name= q3]:checked');
  if ( q3 ==  q3_1) {
    coding_and_programming_result += 0;
    document.getElementById("q3_1_p").innerHTML = "&#x2715;";
    document.getElementById("q3_3_p").innerHTML = "&#x2713;";
  }
  if ( q3 ==  q3_2) {
    coding_and_programming_result += 0;
    document.getElementById("q3_2_p").innerHTML = "&#x2715;";
    document.getElementById("q3_3_p").innerHTML = "&#x2713;";
    
    }
  if ( q3 ==  q3_3) {
    coding_and_programming_result += 1;
    document.getElementById("q3_3_p").innerHTML = "&#x2713;";
    
    
  }
  if ( q3 ==  q3_4) {
    coding_and_programming_result += 0;
    document.getElementById("q3_4_p").innerHTML = "&#x2715;";
    document.getElementById("q3_3_p").innerHTML = "&#x2713;";
  }

  let  q4 = document.querySelector('input[name= q4]:checked');
  if ( q4 ==  q4_1) {
    coding_and_programming_result += 0;
    document.getElementById("q4_1_p").innerHTML = "&#x2715;";
    document.getElementById("q1_3_p").innerHTML = "&#x2713;";
    }
  if ( q4 ==  q4_2) {
    coding_and_programming_result += 0;
    document.getElementById("q4_2_p").innerHTML = "&#x2715;";
    document.getElementById("q4_3_p").innerHTML = "&#x2713;";
  }
  if ( q4 ==  q4_3) {
    coding_and_programming_result += 1;
    document.getElementById("q4_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q4 ==  q4_4) {
    coding_and_programming_result += 0;
    document.getElementById("q4_4_p").innerHTML = "&#x2715;";
    document.getElementById("q4_3_p").innerHTML = "&#x2713;";
  }

  let  q5 = document.querySelector('input[name= q5]:checked');
  if ( q5 ==  q5_1) {
    coding_and_programming_result += 0;
    document.getElementById("q5_1_p").innerHTML = "&#x2715;";
    document.getElementById("q5_3_p").innerHTML = "&#x2713;";
  }
  if ( q5 ==  q5_2) {
    coding_and_programming_result += 0;
    document.getElementById("q5_2_p").innerHTML = "&#x2715;";
    document.getElementById("q5_3_p").innerHTML = "&#x2713;";
  }
  if ( q5 ==  q5_3) {
    coding_and_programming_result += 1;
    document.getElementById("q5_3_p").innerHTML = "&#x2713;";
   }
  if ( q5 ==  q5_4) {
    coding_and_programming_result += 0;
    document.getElementById("q5_4_p").innerHTML = "&#x2715;";
    document.getElementById("q5_3_p").innerHTML = "&#x2713;";
  }

  let  q6 = document.querySelector('input[name= q6]:checked');
  if ( q6 == q6_1) {
    coding_and_programming_result += 1;
    document.getElementById("q6_1_p").innerHTML = "&#x2713;";
}
  if ( q6 ==  q6_2) {
    coding_and_programming_result += 0;
    document.getElementById("q6_2_p").innerHTML = "&#x2715;";
    document.getElementById("q6_1_p").innerHTML = "&#x2713;";
  }
  if ( q6 ==  q6_3) {
    coding_and_programming_result += 0;
    document.getElementById("q6_3_p").innerHTML = "&#x2715;";
    document.getElementById("q6_1_p").innerHTML = "&#x2713;";
  }
  if ( q6 ==  q6_4) {
    coding_and_programming_result += 0;
    document.getElementById("q6_4_p").innerHTML = "&#x2715;";
    document.getElementById("q6_1_p").innerHTML = "&#x2713;";
  }

  let  q7 = document.querySelector('input[name= q7]:checked');
  if ( q7 ==  q7_1) {
    coding_and_programming_result += 0;
    document.getElementById("q7_1_p").innerHTML = "&#x2715;";
    document.getElementById("q7_4_p").innerHTML = "&#x2713;";
  }
  if ( q7 ==  q7_2) {
    coding_and_programming_result += 0;
    document.getElementById("q7_2_p").innerHTML = "&#x2715;";
    document.getElementById("q1_4_p").innerHTML = "&#x2713;";
   }
  if ( q7 ==  q7_3) {
    coding_and_programming_result += 0;
    document.getElementById("q7_3_p").innerHTML = "&#x2715;";
    document.getElementById("q7_4_p").innerHTML = "&#x2713;";
  }
  if ( q7 ==  q7_4) {
    coding_and_programming_result += 1;
    document.getElementById("q7_4_p").innerHTML = "&#x2713;";
    
  }
   
  if (coding_and_programming_result < 3) {
    document.getElementById("coding_and_programming_level1_nextlevel").disabled = true;
    document.getElementById("coding_and_programming_level1_result").innerHTML = "Your score is "+ coding_and_programming_result + "out of 7. You failed the level. You can't go to the next level. Please try again.";
   }
   if (coding_and_programming_result >= 3) {
      document.getElementById("coding_and_programming_level1_nextlevel").disabled = false;
     document.getElementById("coding_and_programming_level1_result").innerHTML = "Your score is "+ coding_and_programming_result + "out of 7. You passed the level. You can go to the next level.";
   
 }
}
function coding_and_programming_level1_reset() {
  for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 4; j++) {
    document.getElementById("q" + i + "_" + j + "_p").innerHTML = " ";
    }
 };
  document.getElementById("coding_and_programming_level1_result").innerHTML = " ";
  document.querySelectorAll('input[type=radio]:checked').forEach(radio => radio.checked = false);
  document.getElementById("coding_and_programming_level1_nextlevel").disabled = true;
}

function coding_and_programming_level1_nextlevel() {
  document.getElementById("coding_and_programming-question-div1").hidden = true;
  document.getElementById("coding_and_programming-question-div2").hidden = false;
}
function coding_and_programming_level2_reset() {
  for (let i = 14; i <= 16; i++) {
    for (let j = 1; j <= 4; j++) {
    document.getElementById("q" + i + "_" + j + "_p").innerHTML = " ";
    }
 };
  document.getElementById("coding_and_programming_level2_result").innerHTML = " ";
  document.querySelectorAll('input[type=radio]:checked').forEach(radio => radio.checked = false);
  document.getElementById("coding_and_programming_level2_nextlevel").disabled = true;
}

function coding_and_programming_level2_nextlevel() {
  document.getElementById("coding_and_programming-question-div2").hidden = true;
  document.getElementById("coding_and_programming-question-div3").hidden = false;
}

s
function coding_and_programming_level2_submit() {
  let coding_and_programming_result=0;
  let q8 = document.querySelector('input[name= q8]:checked');
  if ( q8 ==  q8_1) {
    coding_and_programming_result += 0;
    document.getElementById("q8_1_p").innerHTML = "&#x2715;";
    document.getElementById("q8_3_p").innerHTML = "&#x2713;";
    }
  if ( q8 ==  q8_2) {
    coding_and_programming_result += 0;
    document.getElementById("q8_2_p").innerHTML = "&#x2715;";
    document.getElementById("q8_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q8 ==  q8_3) {
    coding_and_programming_result += 1;
    document.getElementById("q8_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q8 ==  q8_4) {
    coding_and_programming_result += 0;
    document.getElementById("q8_4_p").innerHTML = "&#x2715;";
    document.getElementById("q8_3_p").innerHTML = "&#x2713;";
  }

  let  q9 = document.querySelector('input[name= q9]:checked');
  if ( q9 ==  q9_1) {
    coding_and_programming_result += 0;
    document.getElementById("q9_1_p").innerHTML = "&#x2715;";
    document.getElementById("q9_2_p").innerHTML = "&#x2713;";
  }
  if ( q9 ==  q9_2) {
    coding_and_programming_result += 1;
    document.getElementById("q9_2_p").innerHTML = "&#x2713;";
    }
  if ( q9 ==  q9_3) {
    coding_and_programming_result += 0;
    document.getElementById("q9_3_p").innerHTML = "&#x2715;";
    document.getElementById("q9_2_p").innerHTML = "&#x2713;";
  }
  if ( q9 ==  q9_4) {
    coding_and_programming_result += 0;
    document.getElementById("q9_4_p").innerHTML = "&#x2715;";
    document.getElementById("q9_2_p").innerHTML = "&#x2713;";
  }

  let  q10 = document.querySelector('input[name= q10]:checked');
  if ( q10 ==  q10_1) {
    coding_and_programming_result += 0;
    document.getElementById("q10_1_p").innerHTML = "&#x2715;";
    document.getElementById("q10_4_p").innerHTML = "&#x2713;";
  }
  if ( q10 ==  q10_2) {
    coding_and_programming_result += 0;
    document.getElementById("q10_2_p").innerHTML = "&#x2715;";
    document.getElementById("q10_4_p").innerHTML = "&#x2713;";
    }
  if ( q10 ==  q10_3) {
    coding_and_programming_result += 0;
    document.getElementById("q10_3_p").innerHTML = "&#x2715;";
    document.getElementById("q10_4_p").innerHTML = "&#x2713;";
    
  }
  if ( q10 ==  q10_4) {
    coding_and_programming_result += 1;
    document.getElementById("q10_4_p").innerHTML = "&#x2713;";
    
  }

  let  q11 = document.querySelector('input[name= q11]:checked');
  if ( q11 ==  q11_1) {
    coding_and_programming_result += 0;
    document.getElementById("q11_1_p").innerHTML = "&#x2715;";
    document.getElementById("q11_2_p").innerHTML = "&#x2713;";
    }
  if ( q11 ==  q11_2) {
    coding_and_programming_result += 1;
    document.getElementById("q11_2_p").innerHTML = "&#x2713;";
    
  }
  if ( q11 ==  q11_3) {
    coding_and_programming_result += 0;
    document.getElementById("q11_3_p").innerHTML = "&#x2715;";
    document.getElementById("q11_2_p").innerHTML = "&#x2713;";
    
  }
  if ( q11 ==  q11_4) {
    coding_and_programming_result += 0;
    document.getElementById("q11_4_p").innerHTML = "&#x2715;";
    document.getElementById("q11_2_p").innerHTML = "&#x2713;";
  }

  let  q12 = document.querySelector('input[name= q12]:checked');
  if ( q12 ==  q12_1) {
    coding_and_programming_result += 0;
    document.getElementById("q12_1_p").innerHTML = "&#x2715;";
    document.getElementById("q12_4_p").innerHTML = "&#x2713;";
  }
  if ( q12 ==  q12_2) {
    coding_and_programming_result += 0;
    document.getElementById("q12_2_p").innerHTML = "&#x2715;";
    document.getElementById("q12_4_p").innerHTML = "&#x2713;";
  }
  if ( q12 ==  q12_3) {
    coding_and_programming_result += 0;
    document.getElementById("q12_3_p").innerHTML = "&#x2715;";
    document.getElementById("q12_4_p").innerHTML = "&#x2713;";
   }
  if ( q12 ==  q12_4) {
    coding_and_programming_result += 1;
    document.getElementById("q12_4_p").innerHTML = "&#x2713;";
    
  }

  let  q13 = document.querySelector('input[name= q13]:checked');
  if ( q13 == q13_1) {
    coding_and_programming_result += 0;
    document.getElementById("q13_1_p").innerHTML = "&#x2715;";
    document.getElementById("q13_3_p").innerHTML = "&#x2713;";
}
  if ( q13 ==  q13_2) {
    coding_and_programming_result += 0;
    document.getElementById("q13_2_p").innerHTML = "&#x2715;";
    document.getElementById("q13_3_p").innerHTML = "&#x2713;";
  }
  if ( q13 ==  q13_3) {
    coding_and_programming_result += 0;
    document.getElementById("q13_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q13 ==  q13_4) {
    coding_and_programming_result += 1;
    document.getElementById("q13_4_p").innerHTML = "&#x2715;";
    document.getElementById("q13_1_p").innerHTML = "&#x2713;";
  }

  let  q14 = document.querySelector('input[name= q14]:checked');
  if ( q14 ==  q14_1) {
    coding_and_programming_result += 0;
    document.getElementById("q14_1_p").innerHTML = "&#x2715;";
    document.getElementById("q14_2_p").innerHTML = "&#x2713;";
  }
  if ( q14 ==  q14_2) {
    coding_and_programming_result += 1;
    document.getElementById("q14_2_p").innerHTML = "&#x2713;";
   
   }
  if ( q14 ==  q14_3) {
    coding_and_programming_result += 0;
    document.getElementById("q14_3_p").innerHTML = "&#x2715;";
    document.getElementById("q14_2_p").innerHTML = "&#x2713;";
  }
  if ( q14 ==  q14_4) {
    coding_and_programming_result += 0;
    document.getElementById("q14_4_p").innerHTML = "&#x2715;";
    document.getElementById("q14_2_p").innerHTML = "&#x2713;";
  }
  if (coding_and_programming_result < 3) {
    document.getElementById("coding_and_programming_level2_nextlevel").disabled = true;
    document.getElementById("coding_and_programming_level2_result").innerHTML = "Your score is "+ coding_and_programming_result + "out of 7. You failed the level. You can't go to the next level. Please try again.";
  }
 if (coding_and_programming_result >= 3) {
    document.getElementById("coding_and_programming_level2_nextlevel").disabled = false;
    document.getElementById("coding_and_programming_level2_result").innerHTML = "Your score is "+ coding_and_programming_result + "out of 7. You passed the level. You can go to the next level.";
  }
  
}

function coding_and_programming_level3_submit() {
  let coding_and_programming_result=0;
  let q15 = document.querySelector('input[name= q15]:checked');
  if ( q15 ==  q15_1) {
    coding_and_programming_result += 0;
    document.getElementById("q15_1_p").innerHTML = "&#x2715;";
    document.getElementById("q15_2_p").innerHTML = "&#x2713;";
    }
  if ( q15 ==  q15_2) {
    coding_and_programming_result += 1;
    document.getElementById("q15_2_p").innerHTML = "&#x2713;";
    
    
  }
  if ( q15 ==  q15_3) {
    coding_and_programming_result += 0;
    document.getElementById("q15_3_p").innerHTML = "&#x2715;";
    document.getElementById("q15_2_p").innerHTML = "&#x2713;";
    
  }
  if ( q15 ==  q15_4) {
    coding_and_programming_result += 0;
    document.getElementById("q15_4_p").innerHTML = "&#x2715;";
    document.getElementById("q15_2_p").innerHTML = "&#x2713;";
  }

  let  q16 = document.querySelector('input[name= q16]:checked');
  if ( q16 ==  q16_1) {
    coding_and_programming_result += 0;
    document.getElementById("q16_1_p").innerHTML = "&#x2715;";
    document.getElementById("q16_2_p").innerHTML = "&#x2713;";
  }
  if ( q16 ==  q16_2) {
    coding_and_programming_result += 1;
    document.getElementById("q16_2_p").innerHTML = "&#x2713;";
     }
  if ( q16 ==  q16_3) {
    coding_and_programming_result += 0;
    document.getElementById("q16_3_p").innerHTML = "&#x2715;";
    document.getElementById("q16_2_p").innerHTML = "&#x2713;";
  }
  if ( q16 ==  q16_4) {
    coding_and_programming_result += 0;
    document.getElementById("q16_4_p").innerHTML = "&#x2715;";
    document.getElementById("q16_3_p").innerHTML = "&#x2713;";
  }

  let  q17 = document.querySelector('input[name= q17]:checked');
  if ( q17 ==  q17_1) {
    coding_and_programming_result += 0;
    document.getElementById("q17_1_p").innerHTML = "&#x2715;";
    document.getElementById("q17_3_p").innerHTML = "&#x2713;";
  }
  if ( q17 ==  q17_2) {
    coding_and_programming_result += 0;
    document.getElementById("q17_2_p").innerHTML = "&#x2715;";
    document.getElementById("q17_3_p").innerHTML = "&#x2713;";
    }
  if ( q17 ==  q17_3) {
    coding_and_programming_result += 1;
    document.getElementById("q17_3_p").innerHTML = "&#x2713;";
    }
  if ( q17 ==  q17_4) {
    coding_and_programming_result += 0;
    document.getElementById("q17_4_p").innerHTML = "&#x2715;";
    document.getElementById("q17_3_p").innerHTML = "&#x2713;";
    
  }

  let  q18 = document.querySelector('input[name= q18]:checked');
  if ( q18 ==  q18_1) {
    coding_and_programming_result += 0;
    document.getElementById("q18_1_p").innerHTML = "&#x2715;";
    document.getElementById("q18_2_p").innerHTML = "&#x2713;";
    }
  if ( q18 ==  q18_2) {
    coding_and_programming_result += 1;
    document.getElementById("q18_2_p").innerHTML = "&#x2713;";
    
  }
  if ( q18 ==  q18_3) {
    coding_and_programming_result += 0;
    document.getElementById("q18_3_p").innerHTML = "&#x2715;";
    document.getElementById("q18_2_p").innerHTML = "&#x2713;";
     }
  if ( q18 ==  q18_4) {
    coding_and_programming_result += 0;
    document.getElementById("q18_4_p").innerHTML = "&#x2715;";
    document.getElementById("q18_2_p").innerHTML = "&#x2713;";
  }

  let  q19 = document.querySelector('input[name= q19]:checked');
  if ( q19 ==  q19_1) {
    coding_and_programming_result += 0;
    document.getElementById("q19_1_p").innerHTML = "&#x2715;";
    document.getElementById("q19_3_p").innerHTML = "&#x2713;";
  }
  if ( q19 ==  q19_2) {
    coding_and_programming_result += 0;
    document.getElementById("q19_2_p").innerHTML = "&#x2715;";
    document.getElementById("q19_3_p").innerHTML = "&#x2713;";
  }
  if ( q19 ==  q19_3) {
    coding_and_programming_result += 1;
    document.getElementById("q19_3_p").innerHTML = "&#x2713;";
    
   }
  if ( q19 ==  q19_4) {
    coding_and_programming_result += 0;
    document.getElementById("q19_4_p").innerHTML = "&#x2715;";
    document.getElementById("q19_3_p").innerHTML = "&#x2713;";
  }

  let  q20 = document.querySelector('input[name= q20]:checked');
  if ( q20 == q20_1) {
    coding_and_programming_result += 0;
    document.getElementById("q20_1_p").innerHTML = "&#x2715;";
    document.getElementById("q20_3_p").innerHTML = "&#x2713;";
}
  if ( q20 ==  q20_2) {
    coding_and_programming_result += 0;
    document.getElementById("q20_2_p").innerHTML = "&#x2715;";
    document.getElementById("q20_3_p").innerHTML = "&#x2713;";
   
  }
  if ( q20 ==  q20_3) {
    coding_and_programming_result += 1;
    document.getElementById("q20_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q20 ==  q20_4) {
    coding_and_programming_result += 0;
    document.getElementById("q20_4_p").innerHTML = "&#x2715;";
    document.getElementById("q20_3_p").innerHTML = "&#x2713;";
  }

  let  q21 = document.querySelector('input[name= q21]:checked');
  if ( q21 ==  q21_1) {
    coding_and_programming_result += 0;
    document.getElementById("q21_1_p").innerHTML = "&#x2715;";
    document.getElementById("q21_3_p").innerHTML = "&#x2713;";
  }
  if ( q21 ==  q21_2) {
    coding_and_programming_result += 0;
    document.getElementById("q21_2_p").innerHTML = "&#x2715;";
    document.getElementById("q21_3_p").innerHTML = "&#x2713;";
   
   }
  if ( q21 ==  q21_3) {
    coding_and_programming_result += 1;
    document.getElementById("q21_3_p").innerHTML = "&#x2713;";
    
  }
  if ( q21 ==  q21_4) {
    coding_and_programming_result += 0;
    document.getElementById("q21_4_p").innerHTML = "&#x2715;";
    document.getElementById("q21_3_p").innerHTML = "&#x2713;";
  }
  if (coding_and_programming_result < 3) {
    document.getElementById("coding_and_programming_level3_result").innerHTML = "Your score is "+ coding_and_programming_result + "out of 7. You failed the level. You can't go to the next level. Please try again.";
   }
   if (coding_and_programming_result >= 3) {
   document.getElementById("coding_and_programming_level3_result").innerHTML = "Your score is "+ coding_and_programming_result + "out of 7. You passed the level. You can go to the next level.";
   }
  
}
function coding_and_programming_level3_reset() {
  for (let i = 15; i <= 21; i++) {
    for (let j = 1; j <= 4; j++) {
    document.getElementById("q" + i + "_" + j + "_p").innerHTML = " ";
    }
 };
  document.getElementById("coding_and_programming_level3_result").innerHTML = " ";
  document.querySelectorAll('input[type=radio]:checked').forEach(radio => radio.checked = false); 
}
