import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class Ampharos_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flaaffy";
  public hp: number = 150;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Unseen Flash", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put 2 Lightning Energy cards from your hand in the Lost Zone. If you do, your opponent's Active Pokémon is now Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Split Bomb", cost: [], damage: "", text: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DRM";
  public name: string = "Ampharos";
  public fullName: string = "Ampharos DRM 78";
  public text: string = "Ampharos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:1");
    }
    return state;
  }
}
