var jsValidate = {
  email : {
    regexp : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    isValid : function (email) {
      return this.regexp.test(email);
    }
  },
  cep : {
    regexp : /^([0-9]{5})-{0,1}([0-9]{3})$/,
    mask : "99999-999",
    isValid : function (cep) {
      return this.regexp.test(cep);
    }
  },
  cpf : {
    regexp : /^([0-9]{3}).{0,1}([0-9]{3}).{0,1}([0-9]{3})-{0,1}([0-9]{2})$/,
    mask : "999.999.999-99",
    isValid : function (cpf) {
      if ( this.regexp.test(cpf) ) {
        cpf = cpf.replace(/\./g,'');
        cpf = cpf.replace(/-/g,'');
        var d1 = cpf.substring(9, 10);
        var d2 = cpf.substring(10, 11);
        var resto = 0;

        for ( var i = 0; i < 9; i++ ) 
          resto += cpf.substring(i, (i+1) )*(10-i);
        
        resto = resto%11;
        
        if ( resto == 1 || resto == 0 ) {
          if ( d1 != 0 ) 
          return false;
        } else {
          resto = 11 - resto;
          if ( d1 != resto ) 
          return false;
        }

        resto = 0;
        for ( var i = 0; i < 9; i++ ) 
          resto += cpf.substring((i), (i+1) )*(11-i);

        resto += d1*2;
        resto = resto%11;

        if ( resto == 1 || resto == 0 ) {
          if ( d2 != 0 ) 
          return false;
        } else {
          resto = 11 - resto;
          if ( d2 != resto ) 
          return false;
        }
        return true;
      } else {
        return false;
      }       
    }
  },
  cnpj : {
    regexp : /^([0-9]{2}).{0,1}([0-9]{3}).{0,1}([0-9]{3})\/{0,1}([0-9]{4})-{0,1}([0-9]{2})$/,
    mask : "99.999.999/9999-99",
    isValid : function (cnpj) {
      return this.regexp.test(cnpj);
    }
  },
  telefone : {
    regexp : /^(\([0-9]{2}\)) ([0-9{4}])-([0-9]{4})$/,
    mask : "(99) 9999-9999",
    isValid : function(telefone) {
      return this.regexp.test(telefone);
    }
  },
  celular : {
    regexp : /^(\([0-9]{2}\)) ([0-9]{0,1})([0-9{4}])-([0-9]{4})$/,
    mask : "(99) 9999-9999?9",
    isValid : function(celular) {
      return this.regexp.test(celular);
    }
  }
};