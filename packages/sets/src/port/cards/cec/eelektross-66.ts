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

export class Eelektross_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eelektrik";
  public hp: number = 150;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Electric Swamp", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is in your hand and you have at least 4 Lightning Energy cards in play, you may play this Pokémon onto your Bench. If you do, move any number of Lightning Energy from your other Pokémon to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hover Over", cost: [], damage: "130", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "CEC";
  public name: string = "Eelektross";
  public fullName: string = "Eelektross CEC 66";
  public text: string = "Eelektross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
