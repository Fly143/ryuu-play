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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OricorioGX_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dance of Tribute", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 3 cards. You can't use more than 1 Dance of Tribute Ability each turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Razor Wing", cost: [], damage: "80", text: "" },
      { name: "Strafe-GX", cost: [], damage: "100", text: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Oricorio-GX";
  public fullName: string = "Oricorio-GX CEC 95";
  public text: string = "Oricorio-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
