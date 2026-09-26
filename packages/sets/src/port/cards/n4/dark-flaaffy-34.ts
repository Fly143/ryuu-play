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

export class DarkFlaaffy_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mareep";
  public hp: number = 60;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "High Voltage", cost: [], damage: "10", text: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn." },
      { name: "Stun Wave", cost: [], damage: "30", text: "If the Defending Pokémon has a Pokémon Power, that power stops working until the end of your next turn." }
  ];
  public set: string = "N4";
  public name: string = "Dark Flaaffy";
  public fullName: string = "Dark Flaaffy N4 34";
  public text: string = "Dark Flaaffy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "opponentCantTrainers");
    }
    return state;
  }
}
