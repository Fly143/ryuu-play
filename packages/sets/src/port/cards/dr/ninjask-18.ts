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

export class Ninjask_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nincada";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Loose Shell", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Quick Touch", cost: [], damage: "30", text: "You may switch Ninjask with 1 of your Benched Pokémon. If you do, you may move any number of Grass Energy cards attached to Ninjask to the new Active Pokémon." }
  ];
  public set: string = "DR";
  public name: string = "Ninjask";
  public fullName: string = "Ninjask DR 18";
  public text: string = "Ninjask";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
