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

export class Milotic_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Feebas";
  public hp: number = 120;
    public height?: number = 6.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lifeboat", powerType: PowerType.ABILITY, text: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may use this Ability. Each player puts a Basic Pokémon from their discard pile onto their Bench. (Your opponent puts a Basic Pokémon onto their Bench first.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hypno Splash", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "PAR";
  public name: string = "Milotic";
  public fullName: string = "Milotic PAR 36";
  public text: string = "Milotic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
