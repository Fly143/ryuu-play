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

export class MegaLopunnyJigglypuffGX_165 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 240;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Jumping Balloon", cost: [], damage: "60+", text: "This attack does 60 more damage for each of your opponent's Pokémon-GX and Pokémon-EX in play." },
      { name: "Puffy Smashers-GX", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Asleep. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack's cost), this attack does 200 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Mega Lopunny & Jigglypuff-GX";
  public fullName: string = "Mega Lopunny & Jigglypuff-GX CEC 165";
  public text: string = "Mega Lopunny & Jigglypuff-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
