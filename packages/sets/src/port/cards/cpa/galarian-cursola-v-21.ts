import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GalarianCursolaV_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gnawing Aura", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 3 damage counters on that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hollow Missile", cost: [], damage: "60", text: "Put 3 damage counters on your opponent's Benched Pokémon in any way you like." }
  ];
  public set: string = "CPA";
  public name: string = "Galarian Cursola V";
  public fullName: string = "Galarian Cursola V CPA 21";
  public text: string = "Galarian Cursola V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
