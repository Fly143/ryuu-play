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

export class AltariaEx_232 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swablu";
  public hp: number = 260;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Humming Heal", powerType: PowerType.ABILITY, text: "Once during your turn, you may heal 20 damage from each of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Light Pulse", cost: [], damage: "140", text: "During your opponent's next turn, prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)" }
  ];
  public set: string = "PAR";
  public name: string = "Altaria ex";
  public fullName: string = "Altaria ex PAR 232";
  public text: string = "Altaria ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    return state;
  }
}
