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

export class WormadamTrashCloak_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Burmy Trash Cloak";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cloak Shard", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. If you have Wormadam Plant Cloak in play, this attack does 40 damage to that Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Serve Trash", cost: [], damage: "30", text: "You may search your opponent's discard pile for any 1 card, show it to your opponent, and put it on top of his or her deck." }
  ];
  public set: string = "AR";
  public name: string = "Wormadam Trash Cloak";
  public fullName: string = "Wormadam Trash Cloak AR 51";
  public text: string = "Wormadam Trash Cloak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
