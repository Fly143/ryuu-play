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

export class Delibird_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gift Exchange", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Delibird is your Active Pokémon, you may shuffle 1 card from your hand into your deck. Then, draw a card. This power can't be used if Delibird is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Souvenir", cost: [], damage: "", text: "Flip 3 coins. If 1 of them is heads, put 4 damage counters on the Defending Pokémon. If 2 of them are heads, remove 1 damage counter from the Defending Pokémon. If all of them are heads, put 10 damage counters on the Defending Pokémon. If all of them are tails, remove all damage counters from the Defending Pokémon." }
  ];
  public set: string = "TRR";
  public name: string = "Delibird";
  public fullName: string = "Delibird TRR 21";
  public text: string = "Delibird";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
