import {Admins} from './Admin';
import { Deps } from './Dependente';
import { Depoimentos } from './Depoimento';
import {Socios} from './Socio';
import { Veiculos } from './Veiculo';

Socios.hasOne(Veiculos);
Socios.hasMany(Deps, {as:"deps"});
Socios.hasOne(Depoimentos);

Depoimentos.belongsTo(Socios);
Deps.belongsTo(Socios, {as: 'socios'});
Veiculos.belongsTo(Socios);

export{
  Admins,
  Socios,
  Veiculos,
  Deps,
  Depoimentos
};
