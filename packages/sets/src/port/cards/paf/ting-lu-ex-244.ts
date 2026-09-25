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

export class TingLuEx_244 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 240;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cursed Land", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent's Pokémon in play that have any damage counters on them have no Abilities, except for Pokémon ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Land Scoop", cost: [], damage: "150", text: "Put 2 damage counters on 1 of your opponent's Benched Pokémon." }
  ];
  public set: string = "PAF";
  public name: string = "Ting-Lu ex";
  public fullName: string = "Ting-Lu ex PAF 244";
  public text: string = "Ting-Lu ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
