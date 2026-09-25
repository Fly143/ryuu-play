import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Tangela_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Reactive Healing", powerType: PowerType.ABILITY, text: "Whenever you attach a React Energy card from your hand to Tangela, remove all damage counters from Tangela.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Entangling Vines", cost: [], damage: "10", text: "If the Defending Pokémon is a Basic Pokémon, that Pokémon can't attack during your opponent's next turn." },
      { name: "Gentle Wrap", cost: [], damage: "30", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "LM";
  public name: string = "Tangela";
  public fullName: string = "Tangela LM 44";
  public text: string = "Tangela";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
