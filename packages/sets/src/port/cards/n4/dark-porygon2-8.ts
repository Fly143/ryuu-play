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

export class DarkPorygon2_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spatial Distortion", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, choose a Stadium card from your discard pile and put it into play. (If there's already a Stadium card in play, discard it.) This power can't be used if Dark Porygon2 is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Curve Attack", cost: [], damage: "20", text: "Flip a coin. If heads, prevent all damage done by attacks to Dark Porygon2 during your opponent's next turn. (Any other effects of attacks still happen.)" }
  ];
  public set: string = "N4";
  public name: string = "Dark Porygon2";
  public fullName: string = "Dark Porygon2 N4 8";
  public text: string = "Dark Porygon2";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
