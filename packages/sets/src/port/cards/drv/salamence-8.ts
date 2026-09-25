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

export class Salamence_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scornful Storm", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may have your opponent discard cards from his or her hand until he or she has 4 cards left in his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Shred", cost: [], damage: "90", text: "This attack's damage isn't affected by any effects on the Defending Pokémon." }
  ];
  public set: string = "DRV";
  public name: string = "Salamence";
  public fullName: string = "Salamence DRV 8";
  public text: string = "Salamence";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
