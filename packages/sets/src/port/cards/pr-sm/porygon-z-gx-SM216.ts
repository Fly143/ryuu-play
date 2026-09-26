import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class PorygonZGXSM216 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon2";
  public hp: number = 240;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Troubleshooting", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a Special Energy from this Pokémon. If you do, heal 80 damage from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Abnormal Overheating", cost: [], damage: "160", text: "This Pokémon is now Burned." },
      { name: "Critical Error-GX", cost: [], damage: "", text: "Search your deck for up to 10 cards and discard them. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "PR-SM";
  public name: string = "Porygon-Z-GX";
  public fullName: string = "Porygon-Z-GX PR-SM SM216";
  public text: string = "Porygon-Z-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 80);
    }
    return state;
  }
}
