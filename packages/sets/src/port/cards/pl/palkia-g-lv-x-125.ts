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

export class PalkiaGLVX_125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Palkia G";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lost Cyclone", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Any player who has 4 or more Benched Pokémon chooses 3 of his or her Benched Pokémon. Put the other Benched Pokémon and all cards attached to them in the Lost Zone. (You choose your Pokémon first.) This power can't be used it Palkia G is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hydro Shot", cost: [], damage: "", text: "Discard 2 Energy attached to Palkia G. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PL";
  public name: string = "Palkia G LV.X";
  public fullName: string = "Palkia G LV.X PL 125";
  public text: string = "Palkia G LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 80);
    }
    return state;
  }
}
