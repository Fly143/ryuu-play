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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Skuntank_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Stunky";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolutionary Gas", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you play Skuntank from your hand to evolve 1 of your Active Pokémon, you may choose 1 of the Defending Pokémon. If that Pokémon tries to attack during your opponent's next turn, that attack does nothing.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Claws", cost: [], damage: "20", text: "The Defending Pokémon is now Poisoned." },
      { name: "Plunder", cost: [], damage: "60", text: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon." }
  ];
  public set: string = "PL";
  public name: string = "Skuntank";
  public fullName: string = "Skuntank PL 26";
  public text: string = "Skuntank";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
